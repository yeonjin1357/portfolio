import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./css/globals.scss";

const SITE_URL = "https://portfolio-jinjin.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "최연진 (JIN/JIN) | Frontend Developer",
  description:
    "웹 퍼블리싱에서 시작해 제품 인터페이스를 만들고 있는 프론트엔드 개발자 최연진의 포트폴리오입니다.",
  keywords: [
    "최연진", "JIN/JIN", "JINJIN", "프론트엔드 개발자", "Frontend Developer",
    "React", "Next.js", "TypeScript", "Vue", "데이터 시각화", "웹 접근성", "포트폴리오",
  ],
  authors: [{ name: "최연진 (JIN/JIN)" }],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "최연진 (JIN/JIN) | Frontend Developer",
    description:
      "웹 퍼블리싱에서 시작해 제품 인터페이스를 만들고 있는 프론트엔드 개발자 최연진의 포트폴리오.",
    url: SITE_URL,
    siteName: "최연진 포트폴리오",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "최연진 (JIN/JIN) | Frontend Developer",
    description:
      "웹 퍼블리싱에서 시작해 제품 인터페이스를 만드는 프론트엔드 개발자.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
