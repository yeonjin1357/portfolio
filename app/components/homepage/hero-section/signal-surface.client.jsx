"use client";

import { useEffect, useRef } from "react";

const W = 560,
  H = 180,
  MID = 90,
  N = 90;

// Abstract "signal observation" hero motif: an oscilloscope waveform + a radar sweep.
// Pure atmosphere — NOT real data, and no claimed metrics. Frozen under reduced-motion.
export default function SignalSurface() {
  const lnRef = useRef(null);
  const ln2Ref = useRef(null);
  const areaRef = useRef(null);
  const scanRef = useRef(null);
  const sweepRef = useRef(null);
  const blipsRef = useRef([]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const wave = (ph, amp, f1, f2, off) => {
      let d = "";
      for (let i = 0; i < N; i++) {
        const x = (i / (N - 1)) * W;
        const y = MID + off + Math.sin(i / f1 + ph) * amp + Math.sin(i / f2 - ph * 0.6) * amp * 0.45;
        d += (i ? "L" : "M") + x.toFixed(1) + " " + y.toFixed(1) + " ";
      }
      return d.trim();
    };

    const draw = (ph) => {
      const a = wave(ph, 30, 7, 3, 0);
      lnRef.current?.setAttribute("d", a);
      areaRef.current?.setAttribute("d", a + ` L ${W} ${H} L 0 ${H} Z`);
      ln2Ref.current?.setAttribute("d", wave(ph * 1.25 + 1.5, 16, 5, 9, 16));
      const sx = (ph * 38) % W;
      scanRef.current?.setAttribute("x1", sx);
      scanRef.current?.setAttribute("x2", sx);
    };

    if (reduce) {
      draw(0.8);
      sweepRef.current?.setAttribute("transform", "rotate(40 80 80)");
      return;
    }

    let raf;
    const frame = (ts) => {
      const t = ts / 1000;
      draw(t * 1.4);
      sweepRef.current?.setAttribute("transform", `rotate(${(t * 70) % 360} 80 80)`);
      blipsRef.current.forEach(
        (b, i) => b && b.setAttribute("opacity", (0.22 + 0.6 * Math.abs(Math.sin(t * 1.2 + i * 1.7))).toFixed(2))
      );
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);

  const blips = [
    [113, 103, "#137A6B"],
    [38, 122, "#137A6B"],
    [66, 30, "#C7741A"],
    [102, 54, "#137A6B"],
  ];

  return (
    <div
      role="img"
      aria-label="신호를 형상화한 추상 시각 모션 (실제 데이터가 아닌 분위기 표현)"
      className="mt-10 rounded-lg border border-line bg-card overflow-hidden"
    >
      <div className="flex justify-between items-center px-4 lg:px-5 py-3 border-b border-line font-mono text-xs text-steel">
        <b className="text-ink font-semibold">SIGNAL — 신호 관측</b>
        <span className="inline-flex items-center gap-2 text-verified">
          <i className="w-[7px] h-[7px] rounded-full bg-verified animate-pulse" />
          observing
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[1.7fr_0.9fr]">
        <div className="p-4 border-b border-line md:border-b-0 md:border-r">
          <svg viewBox="0 0 560 180" preserveAspectRatio="none" aria-hidden="true" className="w-full h-[150px] md:h-[172px] block">
            <defs>
              <linearGradient id="ag" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#C7741A" stopOpacity="0.2" />
                <stop offset="1" stopColor="#C7741A" stopOpacity="0" />
              </linearGradient>
            </defs>
            <g stroke="#E4E7EC" strokeWidth="1">
              <line x1="0" y1="45" x2="560" y2="45" />
              <line x1="0" y1="90" x2="560" y2="90" />
              <line x1="0" y1="135" x2="560" y2="135" />
            </g>
            <path ref={areaRef} fill="url(#ag)" d="" />
            <path ref={ln2Ref} fill="none" stroke="#137A6B" strokeWidth="1.4" strokeOpacity="0.5" d="" />
            <path ref={lnRef} fill="none" stroke="#C7741A" strokeWidth="2" strokeLinejoin="round" d="" />
            <line ref={scanRef} x1="0" y1="0" x2="0" y2="180" stroke="#1C2127" strokeWidth="1" strokeOpacity="0.22" strokeDasharray="2 4" />
          </svg>
        </div>
        <div className="flex items-center justify-center p-4">
          <svg viewBox="0 0 160 160" aria-hidden="true" className="w-[140px] h-[140px] block">
            <g fill="none" stroke="#C8CDD4" strokeWidth="1">
              <circle cx="80" cy="80" r="72" />
              <circle cx="80" cy="80" r="48" />
              <circle cx="80" cy="80" r="24" />
              <line x1="8" y1="80" x2="152" y2="80" />
              <line x1="80" y1="8" x2="80" y2="152" />
            </g>
            <g ref={sweepRef}>
              <path d="M80 80 L80 8 A72 72 0 0 1 138 46 Z" fill="#C7741A" fillOpacity="0.14" />
              <line x1="80" y1="80" x2="80" y2="8" stroke="#C7741A" strokeWidth="1.6" />
            </g>
            {blips.map(([cx, cy, fill], i) => (
              <circle key={i} ref={(el) => (blipsRef.current[i] = el)} cx={cx} cy={cy} r="2.6" fill={fill} />
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}
