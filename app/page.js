import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import { revalidatePath } from "next/cache";

async function getData() {
  const res = await fetch("https://portfolio-jinjin.vercel.app/articles.json");
  revalidatePath("/", "layout");

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
      <Blog blogs={blogs} />
      <ContactSection />
    </>
  );
}
