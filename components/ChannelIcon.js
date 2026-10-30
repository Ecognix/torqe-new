import Logo from "./Logo";

const CAL = "M4 6h16v14H4z M4 10h16 M8 3v4 M16 3v4";
const C = {
  whatsapp: { bg: "#25D366", d: "M12 3a9 9 0 00-7.8 13.5L3 21l4.7-1.2A9 9 0 1012 3z M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8c-1-.4-2-1.4-2.4-2.4l.8-1-1-2z" },
  gmail: { bg: "#fff", c: "#EA4335", d: "M3 6h18v12H3z M3 7l9 7 9-7" },
  outlook: { bg: "#0A64D6", t: "O" }, linkedin: { bg: "#0A66C2", t: "in" }, teams: { bg: "#5B5FC7", t: "T" },
  slack: { bg: "#4A154B", d: "M9 4l-2 16 M17 4l-2 16 M4 9h16 M3.5 15h16" },
  gcal: { bg: "#fff", c: "#1A73E8", d: CAL }, ocal: { bg: "#fff", c: "#0A64D6", d: CAL },
  dash: { bg: "#0B0B0C", logo: true }, rag: { bg: "#EFE8D8", c: "#0B0B0C", d: "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3z M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6" },
  price: { bg: "#EFE8D8", c: "#0B0B0C", d: "M3 12V4h8l10 10-8 8z M7.5 8.5h.01" },
};
export default function ChannelIcon({ k, size = 36 }) {
  const c = C[k];
  return (
    <span className="chan" style={{ background: c.bg, width: size, height: size, boxShadow: c.bg === "#fff" ? "inset 0 0 0 1px rgba(11,11,12,.12)" : undefined }}>
      {c.logo ? <Logo white size={size * 0.62} /> : c.t ? (
        <span style={{ color: "#fff", fontWeight: 700, fontSize: size * 0.42, fontFamily: "var(--font-inter)" }}>{c.t}</span>
      ) : (
        <svg viewBox="0 0 24 24" width={size * 0.58} height={size * 0.58} fill="none" stroke={c.c || "#fff"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={c.d} /></svg>
      )}
    </span>
  );
}
