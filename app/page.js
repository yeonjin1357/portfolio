import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

export default async function Home() {
  async function getData() {
    // velog 게시물 json 가져오기
    const res = await fetch(`https://jinjin98.com/public_html/www/articles.json`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();

    // thumbnail이 있는 항목만 필터링
    const filtered = data.filter((item) => item?.thumbnail);
    return filtered;
  }

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
