import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "JIN/JIN, Choi Yeonjin, Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "#F3F3EF",
          color: "#11110F",
          padding: "48px 56px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 19, fontWeight: 700 }}>
          <span>CHOI YEONJIN</span>
          <span>FRONTEND DEVELOPER</span>
          <span>SEOUL · 2026</span>
        </div>

        <div style={{ position: "relative", display: "flex", height: 300, alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "relative", display: "flex", width: 292, height: 210 }}>
            <span style={{ position: "absolute", left: 9, top: -3, color: "#11110F", fontSize: 198, fontWeight: 900, lineHeight: 1 }}>JIN</span>
            <span style={{ position: "absolute", left: 0, top: 3, color: "#FF4B2B", fontSize: 198, fontWeight: 900, lineHeight: 1 }}>JIN</span>
          </div>
          <span style={{ display: "flex", margin: "0 14px", fontSize: 206, fontWeight: 400, lineHeight: 1 }}>/</span>
          <div style={{ position: "relative", display: "flex", width: 292, height: 210 }}>
            <span style={{ position: "absolute", left: 0, top: 3, color: "#FF4B2B", fontSize: 198, fontWeight: 900, lineHeight: 1 }}>JIN</span>
            <span style={{ position: "absolute", left: -9, top: -3, color: "#11110F", fontSize: 198, fontWeight: 900, lineHeight: 1 }}>JIN</span>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "2px solid #11110F", paddingTop: 22, fontSize: 23 }}>
          <span>CHOI YEONJIN</span>
          <span style={{ color: "#62625B" }}>FROM PUBLISHING TO PRODUCT INTERFACES.</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
