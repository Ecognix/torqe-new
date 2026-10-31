import Link from "next/link";
import Reveal from "./Reveal";
import { modelOptions } from "../lib/data";

export default function ModelOptions() {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal as="h2" className="h2 narrow">
          AI models, <span className="heading-accent">chosen for your needs</span>
        </Reveal>
        <Reveal className="prose mt-5">
          <p>Model choice depends on the workflow, performance needs, cost and data-handling requirements. The options below are examples for technical scoping, not a claim that every model is enabled in every deployment.</p>
        </Reveal>
        <Reveal stagger className="model-option-grid mt-10">
          {modelOptions.map((model) => (
            <article key={model.id} className="card model-option-card">
              <div className="model-option-logo"><img src={model.src} alt="" width="42" height="42" /></div>
              <h3 className="h3">{model.name}</h3>
              <p className="small muted mt-2">{model.description}</p>
            </article>
          ))}
        </Reveal>
        <Reveal className="model-option-note mt-6">
          <p className="small">Need to keep prompts and retrieved content inside your environment? <Link href="/security" className="link">Review the security and hosting options</Link>.</p>
        </Reveal>
      </div>
    </section>
  );
}
