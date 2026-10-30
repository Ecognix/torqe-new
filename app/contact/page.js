import Icon from "../../components/Icon";
import LeadForm from "../../components/LeadForm";

export const metadata = { title: "Book a demo", description: "See the Torqe AI agent working on your own inbound flow." };

export default function Contact() {
  return (
    <>
      <section className="pt-40 pb-12">
        <div className="wrap">
          <h1 className="h1 max-w-[14ch]">Book a demo.</h1>
          <p className="lead mt-6">See the AI agent handle a live inbound conversation, from first message to booked meeting, and ask us anything.</p>
        </div>
      </section>
      <section className="pb-24">
        <div className="wrap split">
          <LeadForm kind="demo" />
          <aside className="prose">
            <h3 className="h3 mb-2">What happens next</h3>
            <p className="muted">We reply within one working day, learn how your inbound works today and show Torqe on a workflow like yours. There is no obligation.</p>
            <h3 className="h3 mt-8 mb-2">Email</h3>
            <p><a className="link" href="mailto:hello@torqe.ai">hello@torqe.ai</a></p>
            <h3 className="h3 mt-8 mb-3">In the demo</h3>
            <ul className="grid gap-3">{["A live AI conversation across your channels", "The approval flow on Slack or Teams", "The dashboard and audit trail", "Pricing and pilot options"].map((t) => (<li key={t} className="flex gap-3"><Icon name="check" size={18} className="text-orange mt-1 flex-none" />{t}</li>))}</ul>
          </aside>
        </div>
      </section>
    </>
  );
}
