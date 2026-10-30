# Torqe website (Next.js + Tailwind)

    npm install
    npm run dev      # http://localhost:3000

Pages: / , /product , /workflows , /integrations , /pricing , /pilot , /contact
- All copy and plans live in lib/data.js. Pricing and the email address are samples to replace.
- Logo files: public/logo-orange.png and public/logo-white.png (white version used on dark backgrounds, spinning via .spin-slow).
- Forms (components/LeadForm.js) only show a thank-you message: connect them to your CRM or an API route.
