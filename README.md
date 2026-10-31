# Torqe website (Next.js + Tailwind)

    npm install
    npm run dev      # http://localhost:3000

Pages: / , /product , /workflows , /integrations , /pricing , /pilot , /contact
- All copy and plans live in lib/data.js. Pricing and the email address are samples to replace.
- Logo files: public/logo-orange.png and public/logo-white.png (white version used on dark backgrounds, spinning via .spin-slow).
- Demo, pilot, contact, and footer subscription forms submit through `/api/chat-lead`. Configure `RESEND_API_KEY` and a verified `RESEND_FROM_EMAIL` in the deployment environment. Notifications go to `admin@ecognix.in` and include a CSV attachment for spreadsheet import.
- Each notification includes its submission as a CSV row. The footer links to a free consolidated export request; fulfill it manually from the admin email records because this project does not have persistent lead storage configured.
