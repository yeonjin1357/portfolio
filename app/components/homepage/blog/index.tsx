"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BlogCard from "./blog-card";
import SectionHead from "../section-head";
import type { Article } from "@/utils/types";

function Blog() {
  const [blogs, setBlogs] = useState<Article[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/data/articles.json");
        if (res.ok) {
          const data: Article[] = await res.json();
          setBlogs(data.filter((item) => item?.thumbnail));
        } else {
          console.error("Failed to load articles");
        }
      } catch (e) {
        console.error("Failed to load articles", e);
      }
    })();
  }, []);

  return (
    <section id="blogs" className="my-16 lg:my-24 scroll-mt-20">
      <SectionHead label="기록 / Velog" title="꾸준히 남기는 학습 로그." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {blogs.slice(0, 6).map((blog, i) => (
          <BlogCard blog={blog} key={i} />
        ))}
      </div>
      <div className="mt-8">
        <Link
          href="https://velog.io/@yeonjin1357"
          target="_blank"
          className="font-mono text-[13px] px-5 py-3 rounded-md border border-line text-ink hover:border-ink transition-colors inline-flex items-center gap-2"
        >
          포스팅 더보기 ↗
        </Link>
      </div>
    </section>
  );
}

export default Blog;
