import Link from "next/link";
import { Wordmark } from "./Logo";

export default function Footer() {
  return (
    <footer className="footer tint">
      <div className="wrap grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr] pt-20 pb-8">
        <div>
          <Wordmark size={34} />
          <p className="mt-5 max-w-xs muted">The AI agent that executes your B2B inbound sales, from first message to booked meeting.</p>
        </div>
        <div className="grid gap-2 content-start"><h4 className="font-semibold mb-2">Product</h4><Link href="/product">How it works</Link><Link href="/workflows">Workflows</Link><Link href="/integrations">Integrations</Link><Link href="/pricing">Pricing</Link></div>
        <div className="grid gap-2 content-start"><h4 className="font-semibold mb-2">Get started</h4><Link href="/pilot">Pilot partners</Link><Link href="/contact">Book a demo</Link></div>
        <div className="grid gap-2 content-start"><h4 className="font-semibold mb-2">Contact</h4><a href="mailto:hello@torqe.ai">hello@torqe.ai</a><span className="muted">Built with AI, for revenue teams</span></div>
      </div>
      <div className="wrap flex flex-wrap justify-between gap-3 pb-10 text-sm muted">
        <span>© {new Date().getFullYear()} Torqe. All rights reserved.</span><span>Agentic AI for B2B inbound sales</span>
      </div>
    </footer>
  );
}
