import Link from "next/link";
import Reveal from "../../components/Reveal";
import Icon from "../../components/Icon";
import Faq from "../../components/Faq";
import { plans, compare } from "../../lib/data";

export const metadata = { title: "Pricing", description: "Simple pricing for the Torqe AI agent: pilot partner, Growth and Enterprise." };

const cell = (v) => (v === true ? <Icon name="check" size={18} className="inline text-orange" /> : v === false ? <span className="muted">-</span> : v);

export default function Pricing() {
  return (
    <>
      <section className="pt-40 pb-16 text-center">
        <div className="wrap">
          <h1 className="h1 mx-auto max-w-[14ch]">Pricing that scales with your inbound.</h1>
          <p className="lead mx-auto mt-6">Start with a pilot, grow into a plan, and keep humans in control of every high-stakes AI action.</p>
        </div>
      </section>
      <section className="pb-20">
        <Reveal stagger className="wrap grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((p) => (
            <article key={p.n} className={`${p.hi ? "card-dark bg-ink text-white" : "card"} flex flex-col !p-8`}>
              <h3 className="h3">{p.n}</h3>
              <div className="mt-6 flex items-baseline gap-2"><span className="font-display font-semibold text-5xl tracking-tight">{p.p}</span>{p.per && <span className={p.hi ? "text-[#A9A59C]" : "muted"}>{p.per}</span>}</div>
              <p className={`small mt-3 ${p.hi ? "text-[#A9A59C]" : "muted"}`}>{p.s}</p>
              <ul className="grid gap-3 mt-7 mb-9 flex-1">{p.items.map((i) => (<li key={i} className="flex gap-3 small"><Icon name="check" size={18} className="text-orange flex-none mt-0.5" />{i}</li>))}</ul>
              <Link href={p.href} className={`btn justify-center ${p.hi ? "btn-light" : "btn-ghost"}`}>{p.cta}</Link>
            </article>
          ))}
        </Reveal>
        <p className="wrap text-center small muted mt-6">Sample pricing shown. Final plans are confirmed during your demo.</p>
      </section>
      <section className="section tint">
        <div className="wrap">
          <Reveal as="h2" className="h2 narrow mb-10">Compare plans</Reveal>
          <div className="compare-table-wrap">
            <table className="cmp"><thead><tr><th>Feature</th><th>Pilot</th><th>Growth</th><th>Enterprise</th></tr></thead>
              <tbody>{compare.map((r) => (<tr key={r[0]}><td>{r[0]}</td><td>{cell(r[1])}</td><td>{cell(r[2])}</td><td>{cell(r[3])}</td></tr>))}</tbody></table>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap split"><Reveal as="h2" className="h2">Pricing questions</Reveal><Reveal><Faq /></Reveal></div>
      </section>
    </>
  );
}
