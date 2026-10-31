export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RECIPIENT = "admin@ecognix.in";
const submissions = new Map();
const CSV_HEADERS = [
  "submitted_at", "record_type", "name", "email", "company", "role",
  "sales_channel", "partnership_type", "channels", "monthly_inbound_conversations", "message", "consent",
];

function limited(ip) {
  const now = Date.now();
  const recent = (submissions.get(ip) || []).filter((time) => now - time < 10 * 60 * 1000);
  recent.push(now);
  submissions.set(ip, recent);
  if (submissions.size > 5000) submissions.clear();
  return recent.length > 5;
}

const json = (error, status) => Response.json({ error }, { status });
const csvCell = (value) => {
  const text = String(value ?? "");
  const safeText = /^[\t\r ]*[=+\-@]/.test(text) ? `'${text}` : text;
  return `"${safeText.replaceAll('"', '""')}"`;
};
const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
})[char]);

export async function POST(request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) return json(`Form email is not configured yet. Please email ${RECIPIENT} directly.`, 503);

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "anon";
  if (limited(ip)) return json("Too many submissions. Please wait a few minutes and try again.", 429);

  let body;
  try {
    body = await request.json();
  } catch {
    return json("Invalid submission.", 400);
  }

  const fields = ["name", "email", "company", "role", "message", "channel", "partnershipType", "volume"];
  const values = Object.fromEntries(fields.map((field) => [
    field,
    typeof body?.[field] === "string" ? body[field].replace(/[\r\n]/g, " ").trim().slice(0, field === "message" ? 3000 : 200) : "",
  ]));
  const isNewsletter = body?.type === "newsletter";
  if (!["contact", "demo", "pilot", "newsletter"].includes(body?.type)
    || (!isNewsletter && (!values.name || !values.company))
    || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
    || body?.consent !== true) {
    return json(isNewsletter
      ? "Please provide a valid email address and confirm your subscription."
      : "Please provide your name, a valid email, company, and permission to send your request.", 400);
  }

  const channels = Array.isArray(body.channels)
    ? body.channels.filter((channel) => ["WhatsApp", "Email", "LinkedIn", "Slack", "Teams"].includes(channel)).slice(0, 5)
    : [];
  const submittedAt = new Date().toISOString();
  const requestLabel = isNewsletter
    ? "Updates and offers subscription"
    : body.type === "pilot" ? "Pilot application" : body.type === "contact" ? "Contact request" : "Demo request";
  const emailFields = [
    ["Submitted at", submittedAt],
    ["Request type", requestLabel],
    ["Name", values.name || "Not provided"],
    ["Email", values.email],
    ["Company", values.company || "Not provided"],
    ["Role", values.role || "Not provided"],
    ["Sales channel", values.channel || "Not provided"],
    ["Partnership type", values.partnershipType || "Not provided"],
    ["Channels", channels.join(", ") || "Not provided"],
    ["Monthly inbound conversations", values.volume || "Not provided"],
    ["Message", values.message || "Not provided"],
    ["Consent", "Yes"],
  ];
  const subject = isNewsletter ? requestLabel : `${requestLabel} from ${values.name}`;
  const text = emailFields.map(([label, value]) => `${label}: ${value}`).join("\n");
  const html = `<table style="border-collapse:collapse;font-family:Arial,sans-serif">${emailFields.map(([label, value]) => `<tr><th style="border:1px solid #ddd;padding:8px;text-align:left">${escapeHtml(label)}</th><td style="border:1px solid #ddd;padding:8px">${escapeHtml(value)}</td></tr>`).join("")}</table>`;
  const csv = [
    CSV_HEADERS.map(csvCell).join(","),
    [submittedAt, body.type, values.name, values.email, values.company, values.role, values.channel, values.partnershipType, channels.join("; "), values.volume, values.message, "yes"].map(csvCell).join(","),
  ].join("\r\n");

  let response;
  try {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [RECIPIENT],
        reply_to: values.email,
        subject,
        text,
        html,
        attachments: [{
          filename: `torqe-${body.type}-${submittedAt.slice(0, 10)}.csv`,
          content: Buffer.from(csv, "utf8").toString("base64"),
        }],
      }),
      signal: AbortSignal.timeout(10000),
    });
  } catch (error) {
    console.error("TorqeAI lead email failed:", error.name);
    return json(`We could not send your request right now. Please email ${RECIPIENT} directly.`, 502);
  }

  if (!response.ok) {
    console.error("TorqeAI lead email provider returned:", response.status);
    return json(`We could not send your request right now. Please email ${RECIPIENT} directly.`, 502);
  }

  return Response.json({ sent: true }, { headers: { "Cache-Control": "no-store" } });
}
