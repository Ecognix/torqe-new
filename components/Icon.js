const P = {
  bolt: "M13 3L5 14h6l-1 7 8-11h-6z", chat: "M4 5h16v11H9l-5 4z", mail: "M3 6h18v12H3z M3 7l9 7 9-7",
  calendar: "M4 6h16v14H4z M4 10h16 M8 3v4 M16 3v4", shield: "M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3z M9 12l2 2 4-4",
  doc: "M7 3h7l4 4v14H7z M14 3v4h4 M10 12h5 M10 16h5", search: "M11 18a7 7 0 100-14 7 7 0 000 14z M21 21l-5-5",
  users: "M9 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7z M2 20c0-3.5 3-6 7-6s7 2.5 7 6 M17 5a3.5 3.5 0 010 6 M18 14c2.5.5 4 2.5 4 5",
  link: "M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1 M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1",
  spark: "M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z", chart: "M4 20V4 M4 20h16 M8 16v-5 M13 16V8 M18 16v-8",
  layers: "M12 3l9 5-9 5-9-5z M3 13l9 5 9-5", clock: "M12 21a9 9 0 100-18 9 9 0 000 18z M12 7v5l3 2",
  check: "M5 12l5 5 9-10", arrow: "M5 12h14 M13 6l6 6-6 6", plus: "M12 5v14 M5 12h14", pause: "M8 5v14 M16 5v14",
  edit: "M4 20l1-4L16 5l3 3L8 19z", lock: "M6 11h12v9H6z M8 11V8a4 4 0 018 0v3",
  target: "M12 21a9 9 0 100-18 9 9 0 000 18z M12 16a4 4 0 100-8 4 4 0 000 8z M12 12h.01",
  send: "M21 3L3 11l7 3 3 7z M10 14l11-11", cpu: "M7 7h10v10H7z M10 10h4v4h-4z M9 3v4 M15 3v4 M9 17v4 M15 17v4 M3 9h4 M3 15h4 M17 9h4 M17 15h4",
  refresh: "M20 11a8 8 0 00-14-4L4 9 M4 4v5h5 M4 13a8 8 0 0014 4l2-2 M20 20v-5h-5",
  db: "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3z M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6 M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
  tag: "M3 12V4h8l10 10-8 8z M7.5 8.5h.01",
};
export default function Icon({ name, size = 24, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={P[name]} />
    </svg>
  );
}
