export default function Logo({ size = 28, white = false, spin = false, className = "", style }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={white ? "/logo-white.png" : "/logo-orange.png"} alt="" width={size} height={size}
      className={`${spin ? "spin-slow" : ""} ${className}`} style={{ width: size, height: size, ...style }} />
  );
}

export function Wordmark({ white = false, size = 30 }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Logo size={size} white={white} className="logo-hover" />
      <span className="font-brand font-medium tracking-tight leading-none" style={{ fontSize: size * 0.82 }}>Torqe</span>
    </span>
  );
}
