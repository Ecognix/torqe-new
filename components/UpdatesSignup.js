"use client";
import { useState } from "react";

export default function UpdatesSignup() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");
  const [message, setMessage] = useState("");

  const subscribe = async (event) => {
    event.preventDefault();
    if (state === "sending") return;
    setState("sending");
    setMessage("");
    try {
      const response = await fetch("/api/chat-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "newsletter", email, consent: true }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Subscription could not be completed.");
      setState("sent");
      setMessage("Your subscription request has been sent to the Torqe team.");
      setEmail("");
    } catch (error) {
      setState("error");
      setMessage(error.message || "Subscription could not be completed. Please try again.");
    }
  };

  return (
    <div className="footer-signup">
      <h4 className="font-semibold mb-2">Updates and offers</h4>
      <p className="small muted mb-3">Get occasional product updates and offers by email. You can unsubscribe by emailing admin@ecognix.in.</p>
      <form className="footer-signup-form" onSubmit={subscribe}>
        <label className="sr-only" htmlFor="footer-updates-email">Email address</label>
        <input
          id="footer-updates-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          disabled={state === "sending"}
        />
        <button type="submit" className="btn btn-sm" disabled={state === "sending"}>
          {state === "sending" ? "Subscribing…" : "Subscribe"}
        </button>
      </form>
      {message && <p className={`footer-signup-message ${state}`} role={state === "error" ? "alert" : "status"}>{message}{state === "error" && <> <a href="mailto:admin@ecognix.in">Email admin@ecognix.in</a></>}</p>}
      <a className="footer-export-link" href="mailto:admin@ecognix.in?subject=Request%20for%20a%20free%20CSV%20export">
        Request a free CSV export
      </a>
    </div>
  );
}
