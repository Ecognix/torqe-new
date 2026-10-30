"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Wordmark } from "./Logo";
import { NAV } from "../lib/data";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 24);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`header ${solid || open ? "solid" : ""}`}>
      <div className="wrap header-row">
        <Link href="/" aria-label="Torqe home"><Wordmark size={26} /></Link>
        <nav className={`nav ${open ? "open" : ""}`} aria-label="Main">
          {NAV.map((l) => (<Link key={l.href} href={l.href} aria-current={path === l.href ? "page" : undefined}>{l.label}</Link>))}
          <Link href="/contact" className="btn btn-sm">Book a demo</Link>
        </nav>
        <button className="burger" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu"><span /><span /></button>
      </div>
    </header>
  );
}
