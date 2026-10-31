import Link from "next/link";
import Reveal from "../../components/Reveal";
import Icon from "../../components/Icon";
import Window from "../../components/Window";
import ChannelIcon from "../../components/ChannelIcon";
import { tools } from "../../lib/data";

export const metadata = { title: "Integrations", description: "The channels, team tools and data systems the Torqe AI agent connects to." };

const steps = [
  { icon: "link", t: "Connect your channels", d: "Link WhatsApp Business, your mailboxes, LinkedIn and your calendars." },
  { icon: "db", t: "Ingest your knowledge", d: "Upload specs, PDFs, brochures, rate cards and enterprise guidelines for the AI to learn from." },
  { icon: "shield", t: "Set your guardrails", d: "Choose autonomy thresholds, discount caps and who approves what in Slack, Teams or the dashboard." },
];

export default function Integrations() {
  return (
    <>
      <section className="pt-40 pb-16">
        <div className="wrap">
          <h1 className="h1 max-w-[16ch]">Works where your <span className="heading-accent">buyers</span> and team already are.</h1>
          <p className="lead mt-6">Torqe connects the AI agent to the channels prospects use, the tools your team lives in and the systems that hold your knowledge.</p>
        </div>
      </section>
      <section className="pb-20">
        <Reveal stagger className="wrap grid md:grid-cols-3 gap-6">
          {tools.map((g) => (
            <Window key={g.g} title={g.g}>
              <ul className="grid gap-5">
                {g.items.map(([k, n, d]) => (<li key={n} className="flex gap-3"><ChannelIcon k={k} size={36} /><div><div className="font-medium leading-tight">{n}</div><p className="small muted mt-1">{d}</p></div></li>))}
              </ul>
            </Window>
          ))}
        </Reveal>
      </section>
      <section className="section tint">
        <div className="wrap">
          <Reveal as="h2" className="h2 narrow">Connected in <span className="heading-accent">three steps</span></Reveal>
          <Reveal stagger className="grid md:grid-cols-3 gap-6 mt-12">
            {steps.map((s) => (<article key={s.t} className="card"><span className="ibox"><Icon name={s.icon} /></span><h3 className="h3 mb-2">{s.t}</h3><p className="small muted">{s.d}</p></article>))}
          </Reveal>
          <Reveal className="mt-6 card flex flex-wrap items-center gap-4 justify-between" delay={80}>
            <div><h3 className="h3">Need a tool we do not list?</h3><p className="small muted">Torqe can execute other tasks and connect to other systems around your requirements.</p></div>
            <Link href="/contact" className="link">Tell us what you use</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
