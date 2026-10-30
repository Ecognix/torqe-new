import Link from "next/link";
import Reveal from "../../components/Reveal";
import Icon from "../../components/Icon";
import UseCaseTabs from "../../components/UseCaseTabs";
import { useCases } from "../../lib/data";

export const metadata = { title: "AI workflows", description: "Lead qualification, technical Q&A, quotes, meeting booking, follow-ups and cross-team requests, run by the Torqe AI agent." };

export default function UseCases() {
  return (
    <>
      <section className="pt-40 pb-16">
        <div className="wrap">
          <h1 className="h1 max-w-[16ch]">AI workflows for inbound sales.</h1>
          <p className="lead mt-6">Each workflow shows what the AI agent does on its own and where your team approves. Start with one and add more as trust grows.</p>
        </div>
      </section>
      <section className="pb-20"><div className="wrap"><UseCaseTabs /></div></section>
      <section className="section tint">
        <div className="wrap">
          <Reveal as="h2" className="h2 narrow">Every workflow at a glance</Reveal>
          <Reveal stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {useCases.map((u) => (
              <article key={u.tab} className="card"><span className="ibox"><Icon name={u.icon} /></span><h3 className="h3 mb-2">{u.tab}</h3><p className="small muted mb-4">{u.out}</p>
                <div className="flex gap-2"><span className="tag tag-o">{u.steps.filter((s) => s[0] === "AI").length} AI steps</span><span className="tag">{u.steps.filter((s) => s[0] === "Human").length} human</span></div></article>
            ))}
          </Reveal>
          <Reveal className="mt-6 card flex flex-wrap items-center gap-4 justify-between" delay={80}>
            <div><h3 className="h3">Something else in your process?</h3><p className="small muted">Torqe can execute other tasks according to your requirements. Tell us what to automate.</p></div>
            <Link href="/contact" className="link">Talk to the team</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
