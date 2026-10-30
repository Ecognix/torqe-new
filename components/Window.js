// A product-window card: traffic-light dots, a title, then content.
export default function Window({ title, children, className = "" }) {
  return (
    <div className={`winc ${className}`}>
      <div className="winc-bar">
        <i style={{ background: "#FF5F57" }} /><i style={{ background: "#FEBC2E" }} /><i style={{ background: "#28C840" }} />
        <span>{title}</span>
      </div>
      <div className="winc-body">{children}</div>
    </div>
  );
}
