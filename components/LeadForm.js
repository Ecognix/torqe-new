"use client";
import { useState } from "react";

export default function LeadForm({ kind = "demo" }) {
  const [sent, setSent] = useState(false);
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [partnership, setPartnership] = useState("Guided pilot");
  const [channels, setChannels] = useState(["WhatsApp"]);
  const pilot = kind === "pilot";
  const toggleChannel = (channel) => {
    setChannels((selected) => selected.includes(channel)
      ? selected.filter((item) => item !== channel)
      : [...selected, channel]);
  };
  const submit = async (event) => {
    event.preventDefault();
    if (!consent || submitting) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    setSubmitting(true);
    setError("");
    try {
      const response = await fetch("/api/chat-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: pilot ? "pilot" : "demo",
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          role: data.get("role"),
          message: data.get("message"),
          partnershipType: data.get("partnershipType"),
          channels: data.getAll("channels"),
          volume: data.get("volume"),
          consent,
        }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Your request could not be sent.");
      setSent(true);
    } catch (submitError) {
      setError(submitError.message || "Your request could not be sent. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  if (sent) return (
    <div className="sent" role="status">
      <h3 className="h3 mb-2">Thank you, we have it</h3>
      <p className="muted">{pilot ? "Our founding team will review your application and reply within two working days." : "A member of the Torqe team will reach out shortly to find a time that works."}</p>
    </div>
  );
  return (
    <form onSubmit={submit} className={`form${pilot ? " pilot-form" : ""}`}>
      <div className="grid sm:grid-cols-2 gap-4">
        <label>Full name<input name="name" required autoComplete="name" placeholder="e.g. Maya Chen" /></label>
        <label>Work email<input name="email" type="email" required autoComplete="email" placeholder="you@company.com" /></label>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <label>Company<input name="company" required autoComplete="organization" placeholder="Company name" /></label>
        <label>Role{pilot && <span className="optional"> (optional)</span>}<input name="role" autoComplete="organization-title" placeholder={pilot ? "Your role" : ""} /></label>
      </div>
      {pilot ? (
        <>
          <fieldset className="choice-group">
            <legend>Partnership type</legend>
            <div className="choice-list">
              {["Guided pilot", "Co-build partner", "Design partner"].map((option) => (
                <button key={option} type="button" className={`choice-pill${partnership === option ? " is-selected" : ""}`} aria-pressed={partnership === option} onClick={() => setPartnership(option)}>{option}</button>
              ))}
            </div>
            <input type="hidden" name="partnershipType" value={partnership} />
          </fieldset>
          <fieldset className="choice-group">
            <legend>Channels you sell on</legend>
            <div className="choice-list channel-list">
              {["WhatsApp", "Email", "LinkedIn", "Slack", "Teams"].map((channel) => (
                <button key={channel} type="button" className={`choice-pill${channels.includes(channel) ? " is-channel-selected" : ""}`} aria-pressed={channels.includes(channel)} onClick={() => toggleChannel(channel)}>{channel}</button>
              ))}
            </div>
            {channels.map((channel) => <input key={channel} type="hidden" name="channels" value={channel} />)}
          </fieldset>
          <label>Monthly inbound conversations
            <select name="volume" defaultValue=""><option value="" disabled>Select a volume range</option><option>Under 200</option><option>200 to 1,000</option><option>1,000 to 5,000</option><option>More than 5,000</option></select>
          </label>
        </>
      ) : (
      <label>Where do your prospects reach you?
        <select name="channel" defaultValue="WhatsApp"><option>WhatsApp</option><option>Email</option><option>LinkedIn</option><option>All of the above</option></select>
      </label>
      )}
      <label>{pilot ? "What would you like to automate?" : "What would you like Torqe to handle?"}<textarea name="message" rows={pilot ? 3 : 4} placeholder={pilot ? "Share a little about your inbound process..." : "Qualification, quotes, scheduling, follow-ups..."} /></label>
      <label className="lead-form-consent">
        <input type="checkbox" required checked={consent} onChange={(event) => setConsent(event.target.checked)} />
        <span>I agree to send these details to Torqe so the team can respond. The details will be emailed to <a href="mailto:hello@torqe.ai">hello@torqe.ai</a>.</span>
      </label>
      {error && <p className="lead-form-error" role="alert">{error}</p>}
      <button className="btn justify-self-start" type="submit" disabled={!consent || submitting}>{submitting ? "Sending…" : pilot ? "Apply to the pilot" : "Book a demo"}</button>
    </form>
  );
}
