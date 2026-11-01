"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo, { Wordmark } from "./Logo";
import { NAV } from "../lib/data";

const HeaderIcon = ({ path }) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={path} />
  </svg>
);

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [chatCount, setChatCount] = useState(0);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 24);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  const isChat = path === "/chat";
  useEffect(() => {
    if (!isChat) return;
    const updateCount = (event) => setChatCount(event.detail);
    window.addEventListener("torqeai:session-count", updateCount);
    return () => window.removeEventListener("torqeai:session-count", updateCount);
  }, [isChat]);
  return (
    <header className={`header ${solid || open ? "solid" : ""}`}>
      <div className="wrap header-row">
        <Link href="/" aria-label={isChat ? "TorqeAI home" : "Torqe home"}>
          {isChat ? (
            <span className="torqeai-brand">
              <Logo size={29} />
              <span><span>TorqeAI</span><small>Ask anything about Torqe</small></span>
            </span>
          ) : <Wordmark size={30} />}
        </Link>
        {!isChat && (
          <nav className={`nav ${open ? "open" : ""}`} aria-label="Main">
            {NAV.map((l) => (<Link key={l.href} href={l.href} aria-current={path === l.href ? "page" : undefined}>{l.label}</Link>))}
            <a href="https://console.torqe.ai">Console</a>
            <Link href="/contact" className="btn btn-sm">Book a demo</Link>
          </nav>
        )}
        <div className="header-actions">
          {isChat && (
            <>
              <Link className="chat-header-action" href="/" aria-label="Back to Torqe home" title="Back to Torqe">
                <HeaderIcon path="M19 12H5 M12 19l-7-7 7-7" />
              </Link>
              <button
                className="chat-header-action"
                onClick={() => window.dispatchEvent(new Event("torqeai:history-toggle"))}
                aria-label={`Chat history, ${chatCount} chats`}
                title="Chat history"
              >
                <HeaderIcon path="M3 12a9 9 0 109-9 9.5 9.5 0 00-6.4 2.6L3 8 M3 3v5h5 M12 7v5l3 2" />
                <span className="chat-count">{chatCount}</span>
              </button>
              <button
                className="chat-header-action chat-new"
                onClick={() => window.dispatchEvent(new Event("torqeai:new-chat"))}
                aria-label="New chat"
                title="New chat"
              >
                <HeaderIcon path="M12 5v14 M5 12h14" />
              </button>
            </>
          )}
          {!isChat && <button className="burger" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu"><span /><span /></button>}
        </div>
      </div>
    </header>
  );
}
