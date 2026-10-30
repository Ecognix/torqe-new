import ChannelIcon from "./ChannelIcon";
import Icon from "./Icon";
import Logo from "./Logo";

const LIST = [
  ["linkedin", "Northwind Freight", "Asks about custom SLAs", "Needs approval", "tag-o"],
  ["whatsapp", "Acme Logistics", "Quote sent, demo booked", "AI handling", "tag-g"],
  ["gmail", "Helix Retail", "Pricing question", "Human took over", "tag-k"],
];
const AUDIT = [["Intent: pricing request", 96], ["Retrieved rate-card.xlsx", 94], ["Draft quote generated", 89], ["Discount 15% above cap, approval requested", 100]];

export default function DashboardMock() {
  return (
    <div className="win text-left">
      <div className="win-bar"><Logo white size={20} /><b className="font-semibold">Torqe dashboard</b><span className="opacity-60">Unified feed</span></div>
      <div className="grid md:grid-cols-[1fr_1.1fr]">
        <div className="p-5 grid gap-1 content-start">
          <div className="text-xs muted mb-2">All conversations · live</div>
          {LIST.map(([k, n, s, t, c], i) => (
            <div key={n} className={`flex items-center gap-3 p-3 ${i === 0 ? "bg-sand" : ""}`}>
              <ChannelIcon k={k} size={32} /><div className="flex-1 min-w-0"><div className="font-medium leading-tight truncate">{n}</div><div className="text-sm muted truncate">{s}</div></div><span className={`tag ${c}`}>{t}</span>
            </div>
          ))}
          <div className="flex items-end gap-1.5 h-16 mt-4 px-3">
            {[40, 65, 50, 80, 62, 92, 74].map((h, i) => (<span key={i} className="bar flex-1" style={{ height: h + "%", transitionDelay: i * 70 + "ms", background: i === 5 ? "#F66509" : undefined }} />))}
          </div>
          <div className="text-xs muted px-3">Conversations handled by AI, last 7 days (illustrative)</div>
        </div>
        <div className="p-5 bg-beige">
          <div className="text-sm font-semibold mb-3 flex items-center gap-2"><Icon name="shield" size={16} />Audit trail and confidence</div>
          <div className="grid gap-2.5">
            {AUDIT.map(([l, v], i) => (<div key={l}><div className="flex justify-between text-sm"><span>{l}</span><span className="muted">{v / 100}</span></div><div className="meter mt-1"><i style={{ width: v + "%", transitionDelay: i * 100 + "ms" }} /></div></div>))}
          </div>
          <div className="mt-5 text-sm flex items-center justify-between"><span className="muted">Autonomy threshold</span><b>0.85</b></div>
          <div className="meter mt-1"><i style={{ width: "85%" }} /></div>
          <div className="flex gap-2 mt-5">
            <span className="btn btn-sm btn-ghost"><Icon name="pause" size={14} />Pause agent</span>
            <span className="btn btn-sm btn-ghost"><Icon name="edit" size={14} />Edit draft</span>
            <span className="btn btn-sm">Take over</span>
          </div>
        </div>
      </div>
    </div>
  );
}
