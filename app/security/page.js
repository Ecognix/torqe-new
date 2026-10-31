import Link from "next/link";
import Reveal from "../../components/Reveal";
import Icon from "../../components/Icon";
import { securityOptions } from "../../lib/data";

export const metadata = {
  title: "Security and data handling",
  description: "Explore Torqe's model hosting choices, data flows and security planning considerations.",
};

const considerations = [
  {
    icon: "search",
    title: "Map the data flow",
    text: "Identify which messages, documents and retrieved passages are sent to each model or connected system. Use only the context needed for a task, and confirm provider terms, retention, training, residency and subprocessors for the selected configuration.",
  },
  {
    icon: "lock",
    title: "Set access and action boundaries",
    text: "Scope connected accounts and permissions to the workflow. Define which actions can run automatically and which require a person to review or approve them before execution.",
  },
  {
    icon: "db",
    title: "Agree retention and operations",
    text: "Set expectations for conversation history, logs, backups, support access and deletion before launch. The exact controls depend on the chosen hosting, integrations and contractual scope.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <section className="section security-hero">
        <div className="wrap">
          <Reveal className="eyebrow">Security and data handling</Reveal>
          <Reveal as="h1" className="h1 security-title mt-5">
            Choose where your <span className="heading-accent">AI runs</span> and how data flows.
          </Reveal>
          <Reveal className="lead mt-6">
            <p>Security depends on the full deployment—not just the model. Torqe works with you to select a hosting pattern, map the data sent to each system and set clear boundaries for agent actions.</p>
          </Reveal>
          <Reveal className="security-notice mt-8">
            <Icon name="shield" size={22} />
            <p className="small">This page describes deployment options and planning considerations, not a certification or guarantee. Specific controls, regions and contractual terms must be confirmed for each implementation.</p>
          </Reveal>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <Reveal as="h2" className="h2 narrow">Three hosting patterns, <span className="heading-accent">different trade-offs</span></Reveal>
          <Reveal className="prose mt-5"><p>Choose an approach based on your data classification, operational needs and budget. A deployment may also use different patterns for different workflows.</p></Reveal>
          <Reveal stagger className="grid md:grid-cols-3 gap-6 mt-10">
            {securityOptions.map((option) => (
              <article className="card security-option-card" key={option.title}>
                <span className="ibox"><Icon name={option.icon} /></span>
                <h3 className="h3 mb-2">{option.title}</h3>
                <p className="small muted">{option.text}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal as="h2" className="h2 narrow">Security decisions to make <span className="heading-accent">before launch</span></Reveal>
          <Reveal stagger className="grid md:grid-cols-3 gap-6 mt-10">
            {considerations.map((item) => (
              <article className="card security-option-card" key={item.title}>
                <span className="ibox"><Icon name={item.icon} /></span>
                <h3 className="h3 mb-2">{item.title}</h3>
                <p className="small muted">{item.text}</p>
              </article>
            ))}
          </Reveal>
          <Reveal className="security-api-note mt-8">
            <h3 className="h3 mb-2">When using a provider-hosted API</h3>
            <p className="small muted">The provider processes the prompt and the context sent with it to return a response. Do not assume that data stays within Torqe or is excluded from provider retention or training by default. Review the provider's current terms and configure the account and data handling accordingly.</p>
          </Reveal>
          <Reveal className="mt-8 flex flex-wrap items-center gap-5">
            <Link href="/contact" className="btn">Discuss your requirements</Link>
            <Link href="/integrations" className="link">Explore integrations and model options</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
