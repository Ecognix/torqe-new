export default function LogoMarquee({ items, label }) {
  const repeatedItems = [...items, ...items];

  return (
    <div className="logo-marquee-row">
      <p className="logo-marquee-label">{label}</p>
      <div className="mask-x" role="group" aria-label={`${label}: ${items.map((item) => item.name).join(", ")}`}>
        <div className="logo-marquee-track">
          {repeatedItems.map((item, index) => (
            <span key={`${item.name}-${index}`} className="logo-marquee-chip" aria-hidden={index >= items.length}>
              <img src={item.src} alt="" width="28" height="28" />
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
