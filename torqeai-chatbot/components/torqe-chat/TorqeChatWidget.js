"use client";
import { useState } from "react";
import TorqeChat from "./TorqeChat";

// Floating launcher. Drop <TorqeChatWidget /> into your root layout to show it on every page.
export default function TorqeChatWidget() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && <div className="tcw-panel" role="dialog" aria-label="TorqeAI chat"><TorqeChat variant="widget" onClose={() => setOpen(false)} /></div>}
      {!open && (
        <button className="tcw-btn" onClick={() => setOpen(true)} aria-label="Chat with TorqeAI">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-white.png" alt="" width="30" height="30" className="tc-spin" />
        </button>
      )}
    </>
  );
}
