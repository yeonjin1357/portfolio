import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/utils/types";

function BlogCard({ blog }: { blog: Article }) {
  return (
    <Link
      href={blog.href}
      target="_blank"
      className="group flex flex-col rounded-lg border border-line bg-card overflow-hidden transition-all hover:border-ink hover:-translate-y-0.5"
    >
      <div className="h-44 w-full overflow-hidden bg-paper">
        <Image
          src={blog.thumbnail}
          height={1080}
          width={1920}
          alt=""
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <span className="font-mono text-[11px] text-steel">{blog.date}</span>
        <h3 className="text-[15.5px] font-semibold text-ink leading-snug my-1.5 line-clamp-2 group-hover:text-accent transition-colors">
          {blog.headline}
        </h3>
        <p className="text-[13px] text-steel leading-relaxed line-clamp-2 flex-1">{blog.context}</p>
        {Array.isArray(blog.tags) && blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {blog.tags.slice(0, 3).map((t, i) => (
              <span key={i} className="font-mono text-[10.5px] text-verified">
                #{t}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}

export default BlogCard;
