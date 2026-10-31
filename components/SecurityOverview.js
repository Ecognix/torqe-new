import Link from "next/link";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { securityOptions } from "../lib/data";

export default function SecurityOverview() {
  return (
    <section className="section tint">
      <div className="wrap">
        <Reveal as="h2" className="h2 narrow">
          Deployment choices for <span className="heading-accent">your data requirements</span>
        </Reveal>
        <Reveal className="prose mt-5">
          <p>Provider APIs, dedicated managed environments and client-controlled hosting have different data flows and controls. The right setup should be agreed before connecting business data.</p>
        </Reveal>
        <Reveal stagger className="grid md:grid-cols-3 gap-6 mt-10">
          {securityOptions.map((option) => (
            <article className="card security-option-card" key={option.title}>
              <span className="ibox"><Icon name={option.icon} /></span>
              <h3 className="h3 mb-2">{option.title}</h3>
              <p className="small muted">{option.text}</p>
            </article>
          ))}
        </Reveal>
        <Reveal className="mt-7">
          <Link href="/security" className="link security-page-link">Read the security and deployment details</Link>
        </Reveal>
      </div>
    </section>
  );
}
