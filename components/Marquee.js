import ChannelIcon from "./ChannelIcon";
import { channels } from "../lib/data";

export default function Marquee() {
  const row = [...channels, ...channels];
  return (
    <div className="mask-x">
      <div className="marquee">
        {row.map((c, i) => (<span key={i} className="chan-chip"><ChannelIcon k={c.k} size={30} />{c.n}</span>))}
      </div>
    </div>
  );
}
