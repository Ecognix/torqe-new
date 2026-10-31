import Logo from "./Logo";

const C = {
  whatsapp: { bg: "#fff", src: "/icons/channel-whatsapp.svg" },
  gmail: { bg: "#fff", src: "/icons/channel-gmail.svg" },
  outlook: { bg: "#fff", src: "/icons/channel-outlook.svg" },
  linkedin: { bg: "#fff", src: "/icons/channel-linkedin.svg" },
  teams: { bg: "#fff", src: "/icons/tool-microsoft-teams.svg" },
  slack: { bg: "#fff", src: "/icons/tool-slack.svg" },
  gcal: { bg: "#fff", src: "/icons/tool-google-calendar.svg" },
  ocal: { bg: "#fff", src: "/icons/channel-outlook.svg" },
  gmeet: { bg: "#fff", src: "/icons/tool-google-meet.svg" },
  gsheets: { bg: "#fff", src: "/icons/tool-google-sheets.svg" },
  dash: { bg: "#0B0B0C", logo: true }, rag: { bg: "#EFE8D8", c: "#0B0B0C", d: "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3z M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6" },
  price: { bg: "#EFE8D8", c: "#0B0B0C", d: "M3 12V4h8l10 10-8 8z M7.5 8.5h.01" },
};
export default function ChannelIcon({ k, size = 36 }) {
  const c = C[k];
  return (
    <span className="chan" style={{ background: c.bg, width: size, height: size, boxShadow: c.bg === "#fff" ? "inset 0 0 0 1px rgba(11,11,12,.12)" : undefined }}>
      {c.src ? <img src={c.src} alt="" width={Math.round(size * 0.76)} height={Math.round(size * 0.76)} className="chan-image" /> : c.logo ? <Logo white size={size * 0.62} /> : (
        <svg viewBox="0 0 24 24" width={size * 0.58} height={size * 0.58} fill="none" stroke={c.c || "#fff"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={c.d} /></svg>
      )}
    </span>
  );
}
