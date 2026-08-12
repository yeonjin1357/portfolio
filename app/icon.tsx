import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background: "#F3F3EF",
          fontFamily: "Arial, sans-serif",
          fontSize: 27,
          fontWeight: 900,
          letterSpacing: 0,
        }}
      >
        <span style={{ position: "absolute", display: "flex", color: "#FF4B2B", transform: "translate(-2px, 2px)" }}>
          J/J
        </span>
        <span style={{ position: "relative", display: "flex", color: "#11110F" }}>J/J</span>
      </div>
    ),
    { ...size }
  );
}
