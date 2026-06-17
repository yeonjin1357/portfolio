import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "JINJIN · Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Observatory-styled Open Graph card. Latin-only copy so it renders crisply
// with the default font (no Hangul tofu, no external font fetch needed).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F2F3F5",
          color: "#1C2127",
          padding: "72px",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#5A6472" }}>
          <span>JINJIN · Frontend Developer</span>
          <span style={{ color: "#C7741A" }}>OBSERVATORY</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 82, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>
            <span>Reading the unseen</span>
            <span>signal into screens.</span>
          </div>
          <div style={{ marginTop: 28, fontSize: 27, color: "#5A6472" }}>
            Real-time data viz · Reusable UI · Accessibility
          </div>
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          <div style={{ height: 10, width: 120, background: "#C7741A" }} />
          <div style={{ height: 10, width: 60, background: "#137A6B" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
