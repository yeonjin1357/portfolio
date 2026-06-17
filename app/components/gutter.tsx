"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "about", n: "02", label: "ABOUT" },
  { id: "experience", n: "03", label: "CAREER" },
  { id: "skills", n: "04", label: "STACK" },
  { id: "projects", n: "05", label: "WORK" },
  { id: "blogs", n: "06", label: "LOG" },
  { id: "contact", n: "07", label: "CONTACT" },
];

// Left "measurement gutter" — the Observatory signature instrument bezel.
// Shows the current section index, scroll depth, and a live clock in monospace.
function Gutter() {
  const [clock, setClock] = useState("--:--:--");
  const [scroll, setScroll] = useState("00%");
  const [cur, setCur] = useState({ n: "01", label: "OBSERVE" });

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setClock(
        [d.getHours(), d.getMinutes(), d.getSeconds()]
          .map((x) => String(x).padStart(2, "0"))
          .join(":")
      );
    };
    tick();
    const timer = setInterval(tick, 1000);

    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollHeight > h.clientHeight ? (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 : 0;
      setScroll(String(Math.round(p)).padStart(2, "0") + "%");
      let c = { n: "01", label: "OBSERVE" };
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 140) c = s;
      }
      setCur(c);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <aside
      aria-hidden="true"
      className="hidden lg:flex fixed left-0 top-0 bottom-0 w-[60px] border-r border-line bg-paper/85 backdrop-blur-sm z-50 flex-col items-center justify-between py-5 font-mono text-[11px] text-steel"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
      <span className="[writing-mode:vertical-rl] tracking-[0.18em] text-ink font-semibold uppercase">
        <b className="text-accent">{cur.n}</b> · {cur.label}
      </span>
      <span className="flex flex-col gap-1 items-center text-[9px] tabular-nums">
        <span>{scroll}</span>
        <span>{clock}</span>
        <span className="text-accent">SIGNAL</span>
      </span>
    </aside>
  );
}

export default Gutter;
