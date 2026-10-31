import ChannelIcon from "./ChannelIcon";
import { channels } from "../lib/data";

export default function Marquee() {
  const row = [...channels, ...channels];
  return (
    <div className="mask-x" role="group" aria-label={`Connected channels: ${channels.map((channel) => channel.n).join(", ")}`}>
      <div className="marquee">
        {row.map((c, i) => (<span key={i} className="chan-chip" aria-hidden={i >= channels.length}><ChannelIcon k={c.k} size={30} />{c.n}</span>))}
      </div>
    </div>
  );
}
