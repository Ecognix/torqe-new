export const NAV = [
  { href: "/product", label: "Product" },
  { href: "/workflows", label: "Workflows" },
  { href: "/integrations", label: "Integrations" },
  { href: "/security", label: "Security" },
  { href: "/pricing", label: "Pricing" },
  { href: "/pilot", label: "Pilot partners" },
];

export const channels = [
  { k: "whatsapp", n: "WhatsApp Business" }, { k: "gmail", n: "Gmail" }, { k: "outlook", n: "Outlook" },
  { k: "linkedin", n: "LinkedIn" }, { k: "slack", n: "Slack" }, { k: "teams", n: "Microsoft Teams" },
  { k: "gcal", n: "Google Calendar" }, { k: "ocal", n: "Outlook Calendar" }, { k: "dash", n: "Torqe dashboard" },
];

export const modelOptions = [
  { id: "nvidia", name: "NVIDIA models", description: "Model options served through NVIDIA infrastructure, including deployment approaches selected during technical scoping.", src: "/icons/model-nvidia.svg" },
  { id: "claude", name: "Claude", description: "Available as a provider-hosted model option when its capabilities and data terms fit the use case.", src: "/icons/model-claude.svg" },
  { id: "gemini", name: "Gemini", description: "Available as a provider-hosted model option, subject to client requirements and provider configuration.", src: "/icons/model-gemini.svg" },
  { id: "chatgpt", name: "OpenAI models", description: "Available as a provider-hosted model option, subject to client requirements and provider configuration.", src: "/icons/model-chatgpt.svg" },
];

export const modelMarqueeItems = modelOptions.map(({ name, src }) => ({ name, src }));

export const toolMarqueeItems = [
  { name: "Slack", src: "/icons/tool-slack.svg" },
  { name: "Microsoft Teams", src: "/icons/tool-microsoft-teams.svg" },
  { name: "Google Calendar", src: "/icons/tool-google-calendar.svg" },
  { name: "Google Meet", src: "/icons/tool-google-meet.svg" },
  { name: "Google Sheets", src: "/icons/tool-google-sheets.svg" },
];

export const securityOptions = [
  {
    icon: "cloud",
    title: "Provider-hosted model APIs",
    text: "Prompts and the selected business context are sent to the chosen model provider to generate a response. Provider retention, training, residency and contractual terms vary and must be checked for each deployment.",
  },
  {
    icon: "shield",
    title: "Dedicated Torqe-managed hosting",
    text: "A dedicated deployment can be scoped in Torqe-managed infrastructure. Isolation, access controls, retention and region are agreed and validated as part of the deployment plan.",
  },
  {
    icon: "server",
    title: "Client-controlled hosting",
    text: "For stricter requirements, the agent and a compatible self-hosted model can be deployed in client-controlled infrastructure. This can keep model prompts and retrieved content within that environment, subject to integration, telemetry, backup and network configuration.",
  },
];

export const facts = [
  { n: "3", l: "prospect channels, one thread" },
  { n: "2", l: "approval routes, Slack/Teams and dashboard" },
  { n: "24/7", l: "AI coverage of every inbound" },
  { n: "100%", l: "of high-stakes actions can require sign-off" },
];

export const features = [
  { id: "qualify", icon: "target", t: "Qualifies leads while they are still typing", d: "The AI agent reads each conversation live and scores requirements, budget, company size and urgency, then routes priority accounts straight to your executives." },
  { id: "rag", icon: "search", t: "Answers from your documents, not guesswork", d: "Long-context retrieval over your specs, PDFs and security guidelines gives factual answers with citations. When the AI is unsure, it says so and escalates." },
  { id: "quote", icon: "doc", t: "Quotes and terms in minutes", d: "Torqe computes prices from your rate cards, volumes and contract length, then drafts scope outlines and preliminary terms for your team to approve." },
  { id: "schedule", icon: "calendar", t: "Books the meeting inside the thread", d: "It checks live Google or Outlook availability and books discovery and demo calls without the prospect ever leaving the conversation." },
  { id: "orchestrate", icon: "users", t: "Pulls in your team, not just a notification", d: "Torqe asks engineering, legal or sales leadership for sign-offs on Slack, Teams or the dashboard, and keeps chasing until the answer comes back." },
  { id: "persist", icon: "link", t: "One conversation across every channel", d: "Context follows the prospect from LinkedIn to WhatsApp to email, so nobody repeats themselves and no history is lost." },
];

export const stages = [
  { icon: "bolt", t: "Wake", d: "A message, form, calendar request, team tag or timer wakes the AI agent." },
  { icon: "search", t: "Understand", d: "It reads the thread, retrieves facts from your knowledge base and scores the lead." },
  { icon: "cpu", t: "Decide", d: "It weighs its confidence against your autonomy thresholds and policies." },
  { icon: "send", t: "Act", d: "It replies, quotes, drafts terms, books meetings or loops in a teammate." },
  { icon: "refresh", t: "Follow up", d: "Timers chase stalled deals across channels, and every step is logged." },
];

export const triggers = [
  { icon: "chat", t: "Inbound message webhooks", d: "Wakes instantly when a prospect writes on WhatsApp, email or LinkedIn." },
  { icon: "layers", t: "Forms and bookings", d: "Starts on new lead submissions, landing page actions and calendar requests." },
  { icon: "users", t: "Internal events", d: "Responds when your team tags Torqe, assigns a lead or approves an action in Slack, Teams or the dashboard." },
  { icon: "clock", t: "Follow-up timers", d: "Runs scheduled multi-channel nudges when a prospect goes quiet after a quote or proposal." },
];

export const tools = [
  { g: "Prospect-facing channels", items: [
    ["whatsapp", "WhatsApp Business API", "Two-way conversations on the channel buyers already use."],
    ["gmail", "Gmail", "Reads and replies to inbound email threads."],
    ["outlook", "Outlook, SMTP and IMAP", "Works with Microsoft mailboxes and standard mail protocols."],
    ["linkedin", "LinkedIn Messaging API", "Starts and continues conversations from LinkedIn."] ] },
  { g: "Team-facing tools", items: [
    ["dash", "Torqe HITL dashboard", "Live monitoring, policy control and one-click intervention."],
    ["slack", "Slack", "Instant alerts, approvals and team notifications."],
    ["teams", "Microsoft Teams", "Approvals and notifications on desktop and mobile."] ] },
  { g: "Data and system tools", items: [
    ["gcal", "Google Calendar", "Real-time slot matching and meeting booking."],
    ["ocal", "Outlook Calendar", "Availability checks and invites for Microsoft teams."],
    ["gmeet", "Google Meet", "Add supported video meeting links to calendar bookings."],
    ["gsheets", "Google Sheets", "Connect lead and activity data to Sheets where configured."],
    ["rag", "Knowledge base and RAG engine", "Specs, PDFs and guidelines, searched with citations."],
    ["price", "Dynamic pricing engine", "Rate cards, discount logic and tier calculators."] ] },
];

export const autonomous = ["Lead qualification", "Technical Q&A from your docs", "Meeting scheduling", "Routine follow-ups"];
export const approval = ["Custom price quotes and non-standard discounts", "Custom contract terms and proposal dispatch", "Enterprise security, compliance and custom SLA replies"];

export const useCases = [
  { tab: "Lead qualification", icon: "target", t: "Qualify every inbound lead in the conversation", d: "The AI agent asks the right questions, scores intent and hands your best accounts to your team with the evidence attached.", steps: [["AI", "Greets the prospect on LinkedIn, WhatsApp or email within seconds"], ["AI", "Collects requirements, budget, company size and urgency in natural conversation"], ["AI", "Scores the lead and writes a summary with citations"], ["Human", "Executives receive high-priority accounts with full context"]], out: "Your reps only spend time on accounts worth their time." },
  { tab: "Technical Q&A", icon: "search", t: "Answer complex product questions accurately", d: "Prospects get precise answers about integrations, security and specifications, drawn from your own documents.", steps: [["AI", "Understands the question, even when it spans several topics"], ["AI", "Retrieves the relevant passages from your knowledge base"], ["AI", "Answers with citations and a confidence score"], ["Human", "Below your threshold, the right engineer is asked on Slack or Teams"]], out: "Fast, factual answers with no guessing." },
  { tab: "Quotes and proposals", icon: "doc", t: "Generate quotes and draft terms on the spot", d: "Pricing logic, volume tiers and contract length become a tailored quote, with a draft of scope and terms.", steps: [["AI", "Reads volume, term length and requirements from the thread"], ["AI", "Calculates the price with your pricing engine and discount rules"], ["Human", "Approves non-standard discounts in Slack, Teams or the dashboard"], ["AI", "Sends the quote and proposal summary, then tracks the reply"]], out: "Quotes go out the same day, inside policy." },
  { tab: "Meeting booking", icon: "calendar", t: "Book demos without the email ping-pong", d: "Torqe matches real availability and books the call in the same conversation.", steps: [["AI", "Checks your team's live Google or Outlook calendars"], ["AI", "Proposes the best slots to the prospect in their channel"], ["AI", "Books the call and sends invites to everyone"], ["AI", "Posts a briefing for the rep with the full conversation context"]], out: "Demos land on calendars while interest is high." },
  { tab: "Follow-ups", icon: "refresh", t: "Never let a quote go quiet", d: "Timers and AI judgement keep deals moving without sounding like a robot.", steps: [["AI", "Detects a stalled conversation after a quote or proposal"], ["AI", "Nudges on the prospect's preferred channel with something useful"], ["AI", "Handles objections it can, and summarises the ones it cannot"], ["Human", "Large accounts that go cold are flagged to the owner"]], out: "Deals stop slipping away silently." },
  { tab: "Cross-team requests", icon: "users", t: "Coordinate legal, engineering and sales leadership", d: "For complex enterprise questions, Torqe runs the internal back and forth for you.", steps: [["AI", "Spots a security questionnaire or custom SLA request"], ["AI", "Pings the right teams on Slack, Teams or the dashboard"], ["Human", "Specialists review and sign off in one click"], ["AI", "Drafts and sends the final reply once approvals are in"]], out: "Enterprise reviews without the chasing." },
];

export const plans = [
  { n: "Pilot partner", p: "By invitation", s: "For early teams who want to shape Torqe with us.", cta: "Apply to the pilot", href: "/pilot", items: ["Founding-team onboarding", "One channel to start, WhatsApp or email", "Knowledge base ingestion", "Slack or Teams approvals", "Weekly review calls"] },
  { n: "Growth", p: "$499", per: "per month", s: "For B2B teams putting AI on their full inbound flow.", cta: "Book a demo", href: "/contact", hi: true, items: ["WhatsApp, email and LinkedIn", "Dynamic pricing and quote generation", "Calendar scheduling", "HITL dashboard with audit trail", "Custom guardrails and policies", "Cross-team orchestration"] },
  { n: "Enterprise", p: "Custom", s: "For larger teams with security and scale requirements.", cta: "Talk to us", href: "/contact", items: ["Everything in Growth", "Custom integrations and actions", "Security and compliance reviews", "Custom SLAs", "Dedicated success manager"] },
];

export const compare = [
  ["Prospect channels", "1", "3", "3+"],
  ["Knowledge base retrieval with citations", true, true, true],
  ["Lead scoring and routing", true, true, true],
  ["Dynamic pricing and quotes", false, true, true],
  ["Calendar scheduling", true, true, true],
  ["Slack and Teams approvals", true, true, true],
  ["HITL dashboard and audit trail", true, true, true],
  ["Custom guardrails and policies", "Basic", true, true],
  ["Cross-team orchestration", false, true, true],
  ["Custom integrations and actions", false, false, true],
];

export const pilotBenefits = [
  { icon: "users", t: "Founding-team onboarding", d: "We set up your channels, ingest your documents and tune guardrails alongside you." },
  { icon: "chat", t: "A direct line to the builders", d: "Weekly reviews with the founders and a shared channel for feedback." },
  { icon: "layers", t: "Shape the roadmap", d: "Your workflows decide which integrations and actions we build next." },
  { icon: "spark", t: "Preferred pilot terms", d: "Pilot partners keep favourable terms when they move to a paid plan." },
];
export const pilotSteps = [
  ["Apply", "Tell us about your inbound flow and channels."],
  ["Scope together", "We pick one high-value workflow to automate first."],
  ["Go live", "The AI agent runs with your guardrails and approvals."],
  ["Review", "We measure results and decide the next workflows together."],
];

export const faqs = [
  { q: "What is Torqe?", a: "Torqe is an autonomous AI agent for B2B inbound sales. It qualifies leads, answers technical questions, generates quotes and books meetings across WhatsApp, email and LinkedIn, while your team approves the high-stakes moves." },
  { q: "How is it different from a chatbot?", a: "Chat widgets wait for questions and hand off. Torqe is a system of execution: it reads your documents, calculates quotes, drafts terms, checks calendars and coordinates your team, so work gets finished, not just routed." },
  { q: "Will the AI make things up?", a: "Answers come from retrieval over your own documentation, with citations and a confidence score. Below your confidence threshold, Torqe escalates to a human instead of guessing." },
  { q: "What needs human approval?", a: "You decide. By default, custom quotes, non-standard discounts, custom contract terms and security or SLA replies go to approval on Slack or Teams and the dashboard at the same time." },
  { q: "Which channels and tools does it work with?", a: "WhatsApp Business API, Gmail and Outlook, and LinkedIn messaging for prospects. Slack, Microsoft Teams and the Torqe dashboard for your team. Google and Outlook calendars for booking." },
  { q: "Can my team take over a conversation?", a: "Yes. With one click a rep can pause the AI, edit a draft or take over the live chat, and every AI step stays visible in the audit trail." },
  { q: "Can Torqe do things beyond sales replies?", a: "Yes. Beyond the core workflows, Torqe can carry out other tasks your process needs, within the guardrails and approvals you set." },
  { q: "What does the pilot include?", a: "Hands-on onboarding, knowledge base ingestion, guardrail setup and weekly reviews with the founding team. See the pilot page to apply." },
];
