export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RECIPIENT = "hello@torqe.ai";
const submissions = new Map();

function limited(ip) {
  const now = Date.now();
  const recent = (submissions.get(ip) || []).filter((time) => now - time < 10 * 60 * 1000);
  recent.push(now);
  submissions.set(ip, recent);
  if (submissions.size > 5000) submissions.clear();
  return recent.length > 5;
}

const json = (error, status) => Response.json({ error }, { status });

export async function POST(request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) return json("Chat form email is not configured yet. Please email hello@torqe.ai directly.", 503);

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "anon";
  if (limited(ip)) return json("Too many submissions. Please wait a few minutes and try again.", 429);

  let body;
  try {
    body = await request.json();
  } catch {
    return json("Invalid submission.", 400);
  }

  const fields = ["name", "email", "company", "role", "message", "partnershipType", "volume"];
  const values = Object.fromEntries(fields.map((field) => [
    field,
    typeof body?.[field] === "string" ? body[field].trim().slice(0, field === "message" ? 3000 : 200) : "",
  ]));
  if (!["contact", "demo", "pilot"].includes(body?.type)
    || !values.name || !values.company
    || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
    || body?.consent !== true) {
    return json("Please provide your name, a valid email, company, and permission to send your request.", 400);
  }

  const requestLabel = body.type === "pilot" ? "Pilot application" : body.type === "contact" ? "Contact request" : "Demo request";
  const subject = `${requestLabel} from ${values.name}`;
  const text = [
    `Request type: ${requestLabel}`,
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Company: ${values.company}`,
    `Role: ${values.role || "Not provided"}`,
    ...(body.type === "pilot" ? [
      `Partnership type: ${values.partnershipType || "Not provided"}`,
      `Channels: ${Array.isArray(body.channels) ? body.channels.filter((channel) => typeof channel === "string").slice(0, 5).join(", ") || "Not provided" : "Not provided"}`,
      `Monthly inbound conversations: ${values.volume || "Not provided"}`,
    ] : []),
    "",
    "Message:",
    values.message || "Not provided",
  ].join("\n");

  let response;
  try {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [RECIPIENT], reply_to: values.email, subject, text }),
      signal: AbortSignal.timeout(10000),
    });
  } catch (error) {
    console.error("TorqeAI lead email failed:", error.name);
    return json("We could not send your request right now. Please email hello@torqe.ai directly.", 502);
  }

  if (!response.ok) {
    console.error("TorqeAI lead email provider returned:", response.status);
    return json("We could not send your request right now. Please email hello@torqe.ai directly.", 502);
  }

  return Response.json({ sent: true }, { headers: { "Cache-Control": "no-store" } });
}
