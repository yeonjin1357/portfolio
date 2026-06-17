import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Gutter from "./components/gutter";
import "./css/globals.scss";

const SITE_URL = "https://portfolio-jinjin.vercel.app";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "최연진 (JINJIN) · 프론트엔드 개발자",
  description:
    "사용자와 제품 사이의 경험을 화면으로 구현하는 프론트엔드 개발자 최연진(JINJIN). 실시간 데이터 시각화·모니터링(exemONE), 재사용 가능한 UI 아키텍처, 웹 접근성을 다룹니다.",
  keywords: [
    "최연진", "JINJIN", "프론트엔드 개발자", "Frontend Developer",
    "React", "Next.js", "TypeScript", "Vue", "데이터 시각화", "웹 접근성", "포트폴리오",
  ],
  authors: [{ name: "최연진 (JINJIN)" }],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "최연진 (JINJIN) · 프론트엔드 개발자",
    description:
      "실시간 데이터 시각화·모니터링과 재사용 가능한 UI를 만드는 프론트엔드 개발자 최연진(JINJIN).",
    url: SITE_URL,
    siteName: "최연진 포트폴리오",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "최연진 (JINJIN) · 프론트엔드 개발자",
    description:
      "실시간 데이터 시각화·모니터링과 재사용 가능한 UI를 만드는 프론트엔드 개발자.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.3/packages/wanted-sans/fonts/webfonts/variable/split/WantedSansVariable.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ToastContainer position="bottom-right" theme="light" />
        <Gutter />
        <div className="lg:ml-[60px]">
          <Navbar />
          <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
