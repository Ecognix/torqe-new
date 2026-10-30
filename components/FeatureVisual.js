import ChannelIcon from "./ChannelIcon";
import Icon from "./Icon";

export default function FeatureVisual({ id }) {
  if (id === "qualify") return (
    <div className="flex items-center gap-5">
      <svg width="84" height="84" viewBox="0 0 84 84" className="flex-none">
        <circle cx="42" cy="42" r="34" fill="none" stroke="#E9E3D5" strokeWidth="8" />
        <circle className="ring" cx="42" cy="42" r="34" fill="none" stroke="#F66509" strokeWidth="8" strokeLinecap="round" transform="rotate(-90 42 42)" style={{ "--p": 0.92 }} />
        <text x="42" y="48" textAnchor="middle" fontSize="20" fontWeight="600" fontFamily="var(--font-inter)">92</text>
      </svg>
      <div className="flex-1 grid gap-2.5">
        {[["Budget", 90], ["Company size", 75], ["Urgency", 95]].map(([l, v], i) => (
          <div key={l}><div className="flex justify-between text-xs muted mb-1"><span>{l}</span><span>{v}</span></div><div className="meter"><i style={{ width: v + "%", transitionDelay: i * 120 + "ms" }} /></div></div>
        ))}
      </div>
    </div>
  );
  if (id === "rag") return (
    <div className="grid gap-2 text-sm">
      {[["integration-guide.pdf", "p.14", "0.97"], ["security-overview.pdf", "p.3", "0.93"], ["rate-card.xlsx", "Sheet 2", "0.91"]].map(([n, p, c]) => (
        <div key={n} className="flex items-center justify-between bg-sand px-3 py-2"><span className="flex items-center gap-2"><Icon name="doc" size={15} />{n}<span className="muted">{p}</span></span><b className="font-medium">{c}</b></div>
      ))}
    </div>
  );
  if (id === "quote") return (
    <div className="text-sm grid gap-1.5">
      {[["Growth plan", "$499"], ["Volume add-on, 40k parcels", "$240"], ["Annual term, 10%", "-$74"]].map(([a, b]) => (<div key={a} className="flex justify-between"><span className="muted">{a}</span><span>{b}</span></div>))}
      <div className="flex justify-between items-center pt-2 mt-1 border-t border-black/10"><b className="font-semibold">$665 / month</b><span className="tag tag-o">Awaiting approval</span></div>
    </div>
  );
  if (id === "schedule") return (
    <div className="grid grid-cols-3 gap-2 text-sm text-center">
      {["Wed 11:00", "Thu 3:30", "Thu 5:00", "Fri 10:00", "Fri 2:30", "Mon 9:30"].map((s) => (<span key={s} className={`py-2 ${s === "Thu 3:30" ? "bg-ink text-white" : "bg-sand"}`}>{s}</span>))}
    </div>
  );
  if (id === "orchestrate") return (
    <div className="grid gap-2 text-sm">
      {[["Legal", "slack", "Reviewing terms", "tag-o"], ["Engineering", "teams", "Signed off", "tag-g"], ["Sales lead", "dash", "Approved", "tag-g"]].map(([n, k, s, t]) => (
        <div key={n} className="flex items-center gap-3"><ChannelIcon k={k} size={26} /><span className="flex-1">{n}</span><span className={`tag ${t}`}>{s}</span></div>
      ))}
    </div>
  );
  return (
    <div className="flex items-center justify-between gap-2">
      <ChannelIcon k="linkedin" size={40} /><span className="flex-1 border-t-2 border-dashed border-orange/60" />
      <ChannelIcon k="whatsapp" size={40} /><span className="flex-1 border-t-2 border-dashed border-orange/60" />
      <ChannelIcon k="gmail" size={40} />
    </div>
  );
}
