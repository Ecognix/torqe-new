"use client";
import { useEffect, useRef } from "react";

// Fades content up when it scrolls into view. With `stagger`, each child appears in turn.
export default function Reveal({ as: Tag = "div", stagger = false, className = "", delay = 0, children }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const timers = [];
    const io = new IntersectionObserver((entries) => {
      entries.filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left)
        .forEach((e, i) => {
          const t = e.target, d = delay + (stagger ? i * 110 : 0);
          t.style.transitionDelay = `${d}ms`; t.classList.add("in"); io.unobserve(t);
          timers.push(setTimeout(() => { t.style.transitionDelay = ""; }, d + 1000));
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -4% 0px" });
    (stagger ? Array.from(el.children) : [el]).forEach((t) => io.observe(t));
    return () => { io.disconnect(); timers.forEach(clearTimeout); };
  }, [stagger, delay]);
  return <Tag ref={ref} className={`${stagger ? "stg" : "rv"} ${className}`}>{children}</Tag>;
}
