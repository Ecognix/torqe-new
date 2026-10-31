# TorqeAI chatbot: integration guide

No new npm packages are needed. Works with the Next.js App Router (these JavaScript files also work inside TypeScript projects).

## 1. Copy the files into your Torqe site
    app/api/chat/route.js       -> app/api/chat/route.js
    app/chat/page.js            -> app/chat/page.js         (optional full-page chat at /chat)
    components/torqe-chat/*     -> components/torqe-chat/   (TorqeChat, TorqeChatWidget, Markdown, knowledge, css)

If you place files elsewhere, fix the import in route.js (`../../../components/torqe-chat/knowledge`).

## 2. Add your NVIDIA key
Create a free key at https://build.nvidia.com, then put it in `.env.local`:

    NVIDIA_API_KEY=nvapi-...
    NVIDIA_MODEL=minimaxai/minimax-m3.1-flash
    # Optional, used only for messages with images; choose a vision model enabled for your NVIDIA account:
    # NVIDIA_VISION_MODEL=meta/llama-4-maverick-17b-128e-instruct

Restart `npm run dev`. The key is used only inside `app/api/chat/route.js` (server side).
Free-tier keys are rate limited (about 40 requests per minute), and the route also limits each IP to 12 messages a minute (`CHAT_RATE_LIMIT`).
Any chat model ID enabled on build.nvidia.com may be configured. Visitors can attach up to 3 images (button or paste). They are shrunk to 1024px in the browser, and the server sends images to `NVIDIA_VISION_MODEL`, or to `NVIDIA_MODEL` when that is not set. Check the model page on build.nvidia.com ("View Code") to confirm a model accepts images on your key. TorqeAI can search public web results when a visitor asks for current information; web sources are linked in the answer.

## 2a. Enable demo and pilot submissions
The website's demo and pilot forms (including forms opened in chat) send requests to `hello@torqe.ai` through Resend. Create a Resend API key, verify the sender domain in Resend, and set these server-side environment variables in `.env.local` and in Vercel Production:

    RESEND_API_KEY=re_...
    RESEND_FROM_EMAIL=Torqe <verified-sender@your-domain.com>

Redeploy after updating Vercel variables. Visitors must fill the form and explicitly consent before submission. The chat confirms success only after the email provider accepts the request. Submissions are rate-limited per server instance.

## 3. Show it on your site
Floating button on every page: in `app/layout.js` add

    import TorqeChatWidget from "../components/torqe-chat/TorqeChatWidget";
    ...
    <body>{children}<TorqeChatWidget /></body>

Or link to `/chat` for the full-page version, or render `<TorqeChat />` inside any container that has a height.

## 4. Logos and fonts
The chat uses `/logo-orange.png` and `/logo-white.png` from `/public`, and your site's CSS variables (`--ink`, `--beige`, `--paper`, `--sand`, `--orange`, `--muted`, `--font-body`, `--font-inter`) when they exist. Otherwise it falls back to the Torqe palette.

## 5. Train it: edit `components/torqe-chat/knowledge.js`
All of TorqeAI's knowledge, tone and limits live in that one file: product facts, triggers, integrations, human-in-the-loop control, workflows, the pricing note, the contact email and what it cannot do. Update it whenever the product or pricing changes. Replace `CONTACT_EMAIL` and review `PRICING_NOTE` before launch.

## Notes
- It is chat only: it explains, compares and drafts, but cannot send messages, book meetings or create quotes.
- The in-memory rate limiter works per server instance. For production at scale use a shared store such as Redis or Upstash.
- Chat history and the required-terms/research preference stay in the visitor's browser session (sessionStorage); chat content is not stored on your server. The first chat visit asks the visitor to accept the terms and select an optional research preference. The UI explains that chats are not currently collected for Torqe training or research.
