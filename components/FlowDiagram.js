import Icon from "./Icon";
import ChannelIcon from "./ChannelIcon";
import { stages } from "../lib/data";

// The agent loop behind Torqe. Each stage lights up in turn; the connectors animate in CSS.
export default function FlowDiagram() {
  return (
    <div>
      <div className="flow">
        {stages.map((s, i) => (
          <div key={s.t} className="node" style={{ "--i": i }}>
            <div className="flow-node-head">
              <Icon name={s.icon} size={22} className="text-orange" />
              <span className="num">{i + 1}</span>
            </div>
            <h3 className="h3 mb-2">{s.t}</h3>
            <p className="small muted">{s.d}</p>
          </div>
        ))}
      </div>
      <div className="flow-approval mt-6 card-dark flex flex-wrap items-center gap-x-8 gap-y-4">
        <div className="flex items-center gap-3"><span className="tag tag-o">Human in the loop</span><span className="small">High-stakes action? The AI pauses and asks.</span></div>
        <div className="flex items-center gap-3 md:ml-auto"><ChannelIcon k="slack" size={30} /><ChannelIcon k="teams" size={30} /><ChannelIcon k="dash" size={30} /><span className="small muted">Approve in one click, the AI continues</span></div>
      </div>
    </div>
  );
}
