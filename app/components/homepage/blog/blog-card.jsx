import Image from "next/image";
import Link from "next/link";

function BlogCard({ blog }) {
  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image src={blog.thumbnail} height={1080} width={1920} alt="" className="h-full w-full group-hover:scale-110 transition-all duration-300 object-cover" />
      </div>
      <div className="p-2 sm:p-3 flex flex-col">
        <div className="flex justify-between items-center text-[#16f2b3] text-sm">
          <p>{blog.date}</p>
        </div>
        <Link target="_blank" href={blog.href}>
          <p className="my-2 lg:my-3 cursor-pointer text-lg sm:text-xl font-medium text-white hover:text-blue-300">{blog.headline}</p>
        </Link>
        <p className="text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3">{blog.context}</p>
        <div className="">
          <Link target="_blank" href={blog.href}>
            <button className="bg-violet-500 text-white px-3 py-1.5 rounded-full text-xs">Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
