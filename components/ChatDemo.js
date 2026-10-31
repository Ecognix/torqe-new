"use client";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import ChannelIcon from "./ChannelIcon";
import Icon from "./Icon";

const STEPS = [
  { k: "in", text: "Hi, we ship about 40k parcels a month. Do you integrate with SAP, and what would pricing look like?", log: "Trigger: WhatsApp webhook received" },
  { k: "chips", items: ["Read thread", "3 sources retrieved", "Lead score 92"], log: "Retrieved integration-guide.pdf, p.14" },
  { k: "out", text: "Yes, Torqe connects to SAP through our REST connector. At 40k parcels a month the Growth plan fits well. Shall I prepare a quote?", log: "Answered with 0.97 confidence" },
  { k: "in", text: "Yes please. Can you do 15% off on an annual term?", log: "Pricing engine: discount 15%, cap 10%" },
  { k: "approval", log: "Approval requested on Slack and dashboard" },
  { k: "out", text: "Approved at 12%. I have sent the quote to your email and held Thursday 3:30 pm for a demo. The invite is on its way.", log: "Quote sent, demo booked in Google Calendar" },
];

export default function ChatDemo() {
  const [n, setN] = useState(0);
  const [visible, setVisible] = useState(false);
  const demoRef = useRef(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setN(STEPS.length); return; }
    const element = demoRef.current;
    if (!element) return;
    let interval;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        if (!interval) interval = setInterval(() => setN((p) => (p >= STEPS.length + 3 ? 0 : p + 1)), 1700);
      } else {
        setVisible(false);
        clearInterval(interval);
        interval = undefined;
      }
    }, { threshold: 0.15 });
    observer.observe(element);
    return () => { clearInterval(interval); observer.disconnect(); };
  }, []);
  const shown = STEPS.slice(0, n);
  return (
    <div ref={demoRef} className={`chat-demo win text-left mx-auto max-w-[1040px] ${visible ? "is-visible" : ""}`}>
      <div className="win-bar">
        <Logo white size={22} spin /> <b className="font-semibold">Torqe</b><span className="opacity-60">AI agent</span>
        <span className="ml-auto flex items-center gap-2 opacity-90"><i className="live" />Live session</span>
      </div>
      <div className="grid md:grid-cols-[1.6fr_1fr]">
        <div className="p-5 md:p-7">
          <div className="flex items-center gap-3 mb-5"><ChannelIcon k="whatsapp" size={30} /><div><div className="font-medium leading-tight">Acme Logistics</div><div className="text-sm muted">WhatsApp · Operations director</div></div></div>
          <div className="flex flex-col gap-3 min-h-[360px]">
            {shown.map((s, i) => {
              if (s.k === "chips") return <div key={i} className="chips">{s.items.map((c) => <span key={c} className="chip"><Icon name="spark" size={12} />{c}</span>)}</div>;
              if (s.k === "approval") {
                const done = n > i + 1;
                return (
                  <div key={i} className={`approval ${done ? "done" : ""}`}>
                    <div className="flex items-center gap-2 font-medium"><Icon name={done ? "check" : "pause"} size={16} />{done ? "Approved at 12% by Maya, Sales lead" : "Approval needed: 15% exceeds the 10% cap"}</div>
                    <div className="text-sm muted mt-1">{done ? "Logged in the audit trail" : "Sent to Slack and the Torqe dashboard"}</div>
                  </div>
                );
              }
              return <div key={i} className={`msg ${s.k === "in" ? "msg-in" : "msg-out"}`}>{s.text}</div>;
            })}
          </div>
        </div>
        <aside className="hidden md:block p-7 bg-beige">
          <div className="text-sm font-semibold mb-4 flex items-center gap-2"><Icon name="cpu" size={16} />Agent activity</div>
          <div className="grid gap-3">{shown.map((s, i) => <div key={i} className="logline"><i />{s.log}</div>)}</div>
        </aside>
      </div>
    </div>
  );
}
