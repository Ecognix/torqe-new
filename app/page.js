import Link from "next/link";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import Logo from "../components/Logo";
import ChatDemo from "../components/ChatDemo";
import Marquee from "../components/Marquee";
import FeatureVisual from "../components/FeatureVisual";
import FlowDiagram from "../components/FlowDiagram";
import DashboardMock from "../components/DashboardMock";
import UseCaseTabs from "../components/UseCaseTabs";
import Faq from "../components/Faq";
import { facts, features, triggers, autonomous, approval } from "../lib/data";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden pt-36 md:pt-44 pb-16">
        <div className="dots absolute inset-0" />
        <div className="wrap relative text-center">
          <p className="pill fade-in"><Logo size={22} spin />Agentic AI for B2B inbound sales</p>
          <h1 className="hero-title mx-auto mt-7">
            <span className="line"><span>AI that executes</span></span>
            <span className="line"><span>your <b className="accent">inbound.</b></span></span>
          </h1>
          <p className="lead mx-auto mt-7 fade-in">Torqe is an AI agent that qualifies leads, answers technical questions, drafts quotes and books meetings on WhatsApp, email and LinkedIn, while your team approves the moves that matter.</p>
          <div className="hero-actions flex flex-wrap justify-center gap-4 mt-9 fade-in">
            <Link href="/contact" className="btn">Book a demo</Link>
            <Link href="/pilot" className="btn btn-ghost">Become a pilot partner</Link>
          </div>
        </div>
        <div className="wrap relative mt-16 fade-in"><ChatDemo /></div>
      </section>

      <section className="pb-20">
        <div className="wrap"><p className="text-center small muted mb-6">The AI agent meets prospects where they already are, and your team where they already work</p></div>
        <Marquee />
      </section>

      <section className="section pt-8">
        <div className="wrap split">
          <Reveal as="h2" className="h2">Most AI tools wait to be asked. Torqe gets the work done.</Reveal>
          <Reveal className="prose" delay={120}>
            <p>A chat widget answers a question and hands the lead over. Torqe is an AI system of execution: it reads your documentation, qualifies the buyer, calculates the quote, drafts the terms, checks calendars and brings in your team when a decision needs a human.</p>
            <p>The result is an inbound pipeline with no operational friction and no CRM busywork. Your reps join the conversation when it is worth their time.</p>
            <Link href="/product" className="link">See how the AI agent works</Link>
          </Reveal>
        </div>
        <Reveal stagger className="wrap grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {facts.map((f) => (<div key={f.l}><div className="font-display font-semibold text-5xl tracking-tight">{f.n}</div><p className="small muted mt-1">{f.l}</p></div>))}
        </Reveal>
      </section>

      <section className="section tint">
        <div className="wrap">
          <Reveal as="h2" className="h2 narrow">Everything the AI agent does, so your team does not have to</Reveal>
          <Reveal stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {features.map((f) => (
              <article key={f.id} className="card flex flex-col">
                <div className="min-h-[120px] flex items-center mb-6"><div className="w-full"><FeatureVisual id={f.id} /></div></div>
                <h3 className="h3 mb-2">{f.t}</h3>
                <p className="small muted">{f.d}</p>
              </article>
            ))}
          </Reveal>
          <Reveal className="mt-6 workflow-callout flex flex-wrap items-center gap-4 justify-between" delay={80}>
            <div className="flex items-center gap-4"><span className="ibox !mb-0"><Icon name="spark" /></span><div className="grid gap-3"><h3 className="h3">And anything else your workflow needs</h3><p className="small muted">Beyond the core flows, Torqe can execute other tasks you define, within your guardrails.</p></div></div>
            <Link href="/workflows" className="link">Explore AI workflows</Link>
          </Reveal>
        </div>
      </section>

      <section className="section dark relative overflow-hidden">
        <Logo white size={620} spin className="absolute -right-56 -top-32 opacity-[.05]" />
        <div className="wrap relative">
          <Reveal as="h2" className="h2 narrow">The AI agent loop behind every conversation</Reveal>
          <p className="lead mt-5 mb-12">Five stages run on every inbound, and every stage is logged so your team can see exactly why the AI did what it did.</p>
          <FlowDiagram />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal as="h2" className="h2 narrow">Four ways the AI agent wakes up</Reveal>
          <Reveal stagger className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {triggers.map((t) => (<article key={t.t} className="card"><span className="ibox"><Icon name={t.icon} /></span><h3 className="h3 mb-2">{t.t}</h3><p className="small muted">{t.d}</p></article>))}
          </Reveal>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <div className="split">
            <Reveal as="h2" className="h2">Autonomous where it is safe. Approved where it counts.</Reveal>
            <Reveal className="prose" delay={120}>
              <p>You set the autonomy thresholds. Routine work runs on its own, and high-stakes actions pause for approval on Slack, Teams and the Torqe dashboard at the same time. One click lets a rep pause the AI, edit a draft or take over.</p>
            </Reveal>
          </div>
          <Reveal stagger className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="card"><span className="tag tag-g mb-4">AI runs on its own</span><ul className="grid gap-3">{autonomous.map((a) => (<li key={a} className="flex gap-3"><Icon name="check" size={18} className="text-orange mt-1 flex-none" />{a}</li>))}</ul></div>
            <div className="card"><span className="tag tag-o mb-4">Needs a human to approve</span><ul className="grid gap-3">{approval.map((a) => (<li key={a} className="flex gap-3"><Icon name="lock" size={18} className="text-orange mt-1 flex-none" />{a}</li>))}</ul></div>
          </Reveal>
          <Reveal className="mt-10" delay={100}><DashboardMock /></Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal as="h2" className="h2 narrow">AI use cases, end to end</Reveal>
          <p className="lead mt-5 mb-12">Pick a workflow and see which steps the AI handles and where your team steps in.</p>
          <UseCaseTabs />
        </div>
      </section>

      <section className="section tint">
        <div className="wrap split">
          <Reveal as="h2" className="h2">Questions teams ask us about the AI</Reveal>
          <Reveal><Faq /></Reveal>
        </div>
      </section>

      <section className="section dark relative overflow-hidden text-center">
        <Logo white size={520} spin className="absolute left-1/2 -top-40 -ml-[260px] opacity-[.07]" />
        <div className="wrap relative">
          <Reveal as="h2" className="h2 mx-auto max-w-[20ch]">Become a Torqe pilot partner</Reveal>
          <p className="lead mx-auto mt-5">Work directly with the founding team, automate your first inbound workflow with AI, and help shape what Torqe builds next.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-9"><Link href="/pilot" className="btn btn-light">Apply to the pilot</Link><Link href="/contact" className="link">Or book a demo</Link></div>
        </div>
      </section>
    </>
  );
}
