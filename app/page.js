import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

async function getData() {
  // velog 게시물 json 가져오기
  const url = `https://jinjin98.com/public_html/www/articles.json?timestamp=${new Date().getTime()}`; // 3.19 오류 해결 URL에 고유한 쿼리 파라미터(타임스탬프)를 추가하여 캐싱 문제를 회피
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  // thumbnail이 있는 항목만 필터링
  const filtered = data.filter((item) => item?.thumbnail);
  console.log(filtered);
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
