import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

async function getData() {
  // 새로운 URL을 사용
  const res = await fetch(`https://jinjin98.com/public_html/www/articles.json`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  // thumbnail이 있는 항목만 필터링
  const filtered = data.filter((item) => item?.thumbnail);

  // 발행 날짜에 따라 정렬하기 위해 날짜 파싱 로직 추가
  // 날짜 형식이 일관되지 않은 경우, 추가 처리가 필요할 수 있습니다.
  filtered.sort((a, b) => {
    // "3일 전"과 같은 상대적 날짜를 처리하기 위한 로직이 필요할 수 있음
    // 여기서는 YYYY년 MM월 DD일 형식만 처리
    const dateA = new Date(a.date.replace(/년 |월 /g, "-").replace("일", ""));
    const dateB = new Date(b.date.replace(/년 |월 /g, "-").replace("일", ""));
    return dateB - dateA; // 최신 글이 먼저 오도록
  });

  return filtered;
}

export default async function Home() {
  const blogs = await getData();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      {/* <Education /> */}
      <Blog blogs={blogs} />
      <ContactSection />
    </>
  );
}
