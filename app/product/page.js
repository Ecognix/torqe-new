import Link from "next/link";
import Reveal from "../../components/Reveal";
import Icon from "../../components/Icon";
import Logo from "../../components/Logo";
import ChannelIcon from "../../components/ChannelIcon";
import FeatureVisual from "../../components/FeatureVisual";
import Window from "../../components/Window";
import FlowDiagram from "../../components/FlowDiagram";
import DashboardMock from "../../components/DashboardMock";
import { features, triggers, tools, autonomous, approval } from "../../lib/data";

const ROWS = {
  qualify: { eyebrow: "Qualification", window: "Lead scorecard", bullets: ["Real-time requirement extraction", "Automatic lead scoring", "Instant routing of high-priority accounts"] },
  rag: { eyebrow: "Knowledge", window: "Retrieved sources", bullets: ["Long-context retrieval over your documents", "Citations and a confidence score on every answer", "Escalates to a human when unsure"] },
  quote: { eyebrow: "Quotes", window: "Draft quote", bullets: ["Prices from your rate cards and volumes", "Scope outlines and preliminary terms", "Approval for non-standard discounts"] },
  schedule: { eyebrow: "Scheduling", window: "Available slots", bullets: ["Live Google and Outlook availability", "Slots offered inside the conversation", "Invites and rep briefings sent automatically"] },
  orchestrate: { eyebrow: "Orchestration", window: "Team sign-offs", bullets: ["Pings engineering, legal and sales leadership", "Approvals on Slack, Teams or the dashboard", "Chases until every sign-off is in"] },
  persist: { eyebrow: "Continuity", window: "One conversation", bullets: ["Context follows the prospect across channels", "No repeated questions", "Full history in the unified feed"] },
};

export const metadata = { title: "Product", description: "How the Torqe AI agent works: triggers, retrieval, decisions, actions, approvals and integrations." };

export default function Product() {
  return (
    <>
      <section className="pt-40 pb-16">
        <div className="wrap">
          <h1 className="h1 max-w-[16ch]">The AI agent behind your inbound.</h1>
          <p className="lead mt-6">Torqe ingests your internal documentation, then autonomously qualifies leads, answers complex technical queries, generates quotes, drafts terms and books meetings in the channel your prospect prefers.</p>
        </div>
      </section>

      <section className="section dark relative overflow-hidden">
        <Logo white size={560} spin className="absolute -left-52 -bottom-40 opacity-[.05]" />
        <div className="wrap relative">
          <Reveal as="h2" className="h2 narrow">How the AI agent works</Reveal>
          <p className="lead mt-5 mb-12">Wake, understand, decide, act and follow up. Your guardrails sit at the decision step.</p>
          <FlowDiagram />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal as="h2" className="h2 narrow">What wakes the AI up</Reveal>
          <Reveal stagger className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {triggers.map((t) => (<article key={t.t} className="card"><span className="ibox"><Icon name={t.icon} /></span><h3 className="h3 mb-2">{t.t}</h3><p className="small muted">{t.d}</p></article>))}
          </Reveal>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <Reveal as="h2" className="h2 narrow">The complete AI feature set</Reveal>
          <div className="grid gap-24 md:gap-32 mt-16">
            {features.map((f, i) => {
              const r = ROWS[f.id];
              return (
                <Reveal key={f.id} className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                  <div className={i % 2 ? "md:order-2" : ""}>
                    <p className="eyebrow">{r.eyebrow}</p>
                    <h3 className="h2 mt-4 mb-4 max-w-[18ch]">{f.t}</h3>
                    <p className="muted text-[1.1rem] max-w-[52ch]">{f.d}</p>
                    <ul className="grid gap-3 mt-6">{r.bullets.map((b) => (<li key={b} className="flex gap-3 text-lg"><Icon name="check" size={20} className="text-orange mt-1 flex-none" />{b}</li>))}</ul>
                  </div>
                  <Window title={r.window}><div className="w-full min-h-[190px] flex items-center"><div className="w-full"><FeatureVisual id={f.id} /></div></div></Window>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal as="h2" className="h2 narrow">Tools and integrations</Reveal>
          <Reveal stagger className="grid md:grid-cols-3 gap-6 mt-12">
            {tools.map((g) => (
              <div key={g.g} className="card">
                <h3 className="h3 mb-5">{g.g}</h3>
                <ul className="grid gap-3">{g.items.map(([k, n]) => (<li key={n} className="flex items-center gap-3"><ChannelIcon k={k} size={32} />{n}</li>))}</ul>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <div className="split">
            <Reveal as="h2" className="h2">Human in the loop, by design</Reveal>
            <Reveal className="prose" delay={120}>
              <p>A unified feed shows every AI conversation across WhatsApp, email and LinkedIn. Reps can pause the agent, edit a draft or take over live. Every draft carries its reasoning, document citations and a confidence score.</p>
              <p>Adjust autonomy rules, discount caps and fallback behaviour on the fly, with no redeploy.</p>
            </Reveal>
          </div>
          <Reveal stagger className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="card"><span className="tag tag-g mb-4">AI runs on its own</span><ul className="grid gap-3">{autonomous.map((a) => (<li key={a} className="flex gap-3"><Icon name="check" size={18} className="text-orange mt-1 flex-none" />{a}</li>))}</ul></div>
            <div className="card"><span className="tag tag-o mb-4">Needs a human to approve</span><ul className="grid gap-3">{approval.map((a) => (<li key={a} className="flex gap-3"><Icon name="lock" size={18} className="text-orange mt-1 flex-none" />{a}</li>))}</ul></div>
          </Reveal>
          <Reveal className="mt-10"><DashboardMock /></Reveal>
        </div>
      </section>

      <section className="section dark text-center">
        <div className="wrap">
          <h2 className="h2 mx-auto max-w-[20ch]">See the AI agent on your own inbound</h2>
          <div className="product-final-actions flex flex-wrap justify-center gap-4 mt-9"><Link href="/contact" className="btn btn-light">Book a demo</Link><Link href="/pricing" className="link">View pricing</Link></div>
        </div>
      </section>
    </>
  );
}
