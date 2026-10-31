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
              <h3 className="h3">{s.t}</h3>
              <Icon name={s.icon} size={22} className="text-orange" />
            </div>
            <p className="small muted">{s.d}</p>
          </div>
        ))}
      </div>
      <div className="flow-approval mt-6 card-dark">
        <div className="flow-approval-question">
          <p className="flow-approval-prompt">High-stakes action? The AI pauses and asks.<span className="tag tag-o">Human in the loop</span></p>
        </div>
        <div className="flow-approval-channels">
          <div className="flow-approval-icons"><ChannelIcon k="slack" size={30} /><ChannelIcon k="teams" size={30} /><ChannelIcon k="dash" size={30} whiteLogo /></div>
          <span className="small muted">Approve in one click</span>
        </div>
      </div>
    </div>
  );
}
