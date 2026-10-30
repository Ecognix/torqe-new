import Icon from "./Icon";
import { faqs } from "../lib/data";

export default function Faq() {
  return (
    <div className="faq">
      {faqs.map((f) => (
        <details key={f.q}><summary>{f.q}<Icon name="plus" size={20} /></summary><p className="muted">{f.a}</p></details>
      ))}
    </div>
  );
}
