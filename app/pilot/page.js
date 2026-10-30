import Reveal from "../../components/Reveal";
import Icon from "../../components/Icon";
import Logo from "../../components/Logo";
import LeadForm from "../../components/LeadForm";
import { pilotBenefits, pilotSteps } from "../../lib/data";

export const metadata = { title: "Pilot program", description: "Become a Torqe pilot partner and automate your first inbound workflow with an AI agent, alongside the founding team." };

export default function Pilot() {
  return (
    <>
      <section className="pt-40 pb-16">
        <div className="wrap">
          <h1 className="h1 max-w-[16ch]">Build with us. Become a pilot partner.</h1>
          <p className="lead mt-6">We are working with a small group of B2B teams to put an AI agent on their inbound sales. You get hands-on help and a say in what we build.</p>
        </div>
      </section>
      <section className="pb-20">
        <Reveal stagger className="wrap grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {pilotBenefits.map((b) => (<article key={b.t} className="card"><span className="ibox"><Icon name={b.icon} /></span><h3 className="h3 mb-2">{b.t}</h3><p className="small muted">{b.d}</p></article>))}
        </Reveal>
      </section>
      <section className="section dark relative overflow-hidden">
        <Logo white size={520} spin className="absolute -right-48 -bottom-40 opacity-[.05]" />
        <div className="wrap relative">
          <Reveal as="h2" className="h2 narrow">How the pilot works</Reveal>
          <Reveal stagger className="grid md:grid-cols-4 gap-6 mt-12">
            {pilotSteps.map(([t, d], i) => (<div key={t} className="card-dark"><span className="font-display font-semibold text-orange text-2xl">0{i + 1}</span><h3 className="h3 mt-3 mb-2">{t}</h3><p className="small muted">{d}</p></div>))}
          </Reveal>
        </div>
      </section>
      <section id="apply" className="section pilot-apply">
        <div className="wrap split pilot-apply-grid">
          <div className="pilot-apply-copy">
            <p className="eyebrow mb-5">Apply</p>
            <Reveal as="h2" className="h2">Tell us about your inbound.</Reveal>
            <div className="prose mt-6 muted"><p>A few details are enough to get started. We’ll follow up with a scoping call and a plan tailored to your channels and team.</p></div>
            <ul className="pilot-promises">
              {["Reply within two business days", "No commitment to apply", "Your data stays yours"].map((item) => (
                <li key={item}><Icon name="check" size={18} />{item}</li>
              ))}
            </ul>
          </div>
          <Reveal><LeadForm kind="pilot" /></Reveal>
        </div>
      </section>
    </>
  );
}
