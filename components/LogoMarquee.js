export default function LogoMarquee({ items, label, dark = false }) {
  const repeatedItems = [...items, ...items];

  return (
    <div className={`logo-marquee-row${dark ? " logo-marquee-dark" : ""}`}>
      <p className="logo-marquee-label">{label}</p>
      <div className="mask-x" role="group" aria-label={`${label}: ${items.map((item) => item.name).join(", ")}`}>
        <div className="logo-marquee-track">
          {repeatedItems.map((item, index) => (
            <span key={`${item.name}-${index}`} className="logo-marquee-chip" aria-hidden={index >= items.length}>
              <img src={item.src} alt="" width="36" height="36" />
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
