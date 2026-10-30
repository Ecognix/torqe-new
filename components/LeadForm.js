"use client";
import { useState } from "react";

export default function LeadForm({ kind = "demo" }) {
  const [sent, setSent] = useState(false);
  const [partnership, setPartnership] = useState("Guided pilot");
  const [channels, setChannels] = useState(["WhatsApp"]);
  const pilot = kind === "pilot";
  const toggleChannel = (channel) => {
    setChannels((selected) => selected.includes(channel)
      ? selected.filter((item) => item !== channel)
      : [...selected, channel]);
  };
  if (sent) return (
    <div className="sent" role="status">
      <h3 className="h3 mb-2">Thank you, we have it</h3>
      <p className="muted">{pilot ? "Our founding team will review your application and reply within two working days." : "A member of the Torqe team will reach out shortly to find a time that works."}</p>
    </div>
  );
  return (
    <form onSubmit={(e) => { e.preventDefault(); /* connect to your CRM, email service or an API route */ setSent(true); }} className={`form${pilot ? " pilot-form" : ""}`}>
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
      <button className="btn justify-self-start" type="submit">{pilot ? "Apply to the pilot" : "Book a demo"}</button>
    </form>
  );
}
