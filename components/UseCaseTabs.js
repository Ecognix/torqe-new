"use client";
import { useState } from "react";
import Icon from "./Icon";
import { useCases } from "../lib/data";

export default function UseCaseTabs({ plainPanel = false }) {
  const [i, setI] = useState(0);
  const u = useCases[i];
  return (
    <div className={`grid ${plainPanel ? "md:grid-cols-[280px_minmax(0,1fr)]" : "md:grid-cols-[300px_minmax(0,1fr)]"} gap-6 md:gap-10`}>
      <div role="tablist" aria-label="AI use cases" className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible pb-1">
        {useCases.map((c, k) => (
          <button key={c.tab} role="tab" aria-selected={i === k} className={`tab ${i === k ? "on" : ""}`} onClick={() => setI(k)}><Icon name={c.icon} size={20} />{c.tab}</button>
        ))}
      </div>
      <div key={i} className="use-case-panel card" style={{ animation: "pop .6s var(--ease) both", padding: "clamp(1.5rem,4vw,2.6rem)" }}>
        <h3 className="h2 mb-3 max-w-[22ch]">{u.t}</h3>
        <p className="muted max-w-[56ch] mb-8">{u.d}</p>
        <ol className="grid gap-4">
          {u.steps.map(([a, t], k) => (
            <li key={k} className="use-case-step"><span className="use-case-step-number">{k + 1}</span><span>{t}</span><span className={`badge ${a === "AI" ? "badge-ai" : "badge-h"}`}>{a}</span></li>
          ))}
        </ol>
        <div className="mt-8 pt-5 border-t border-black/10 flex items-center gap-3"><Icon name="check" size={18} className="text-orange" /><b className="font-medium">{u.out}</b></div>
      </div>
    </div>
  );
}
