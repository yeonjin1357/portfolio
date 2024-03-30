import fs from "fs";
import path from "path";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import { revalidatePath } from "next/cache";

// getStaticProps를 사용하여 빌드 시 articles.json 파일을 로드합니다.
export async function getStaticProps() {
  // articles.json 파일의 경로를 지정합니다.
  const filePath = path.join(process.cwd(), "utils", "data", "articles.json");
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);

  // thumbnail이 있는 항목만 필터링합니다.
  const filtered = data.filter((item) => item?.thumbnail);

  // props로 데이터를 반환합니다.
  return {
    props: {
      blogs: filtered,
    },
  };
}

export default async function Home({ blogs }) {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Blog blogs={blogs} />
      <ContactSection />
    </>
  );
}
