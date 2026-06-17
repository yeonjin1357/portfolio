import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";

function Footer() {
  return (
    <footer className="border-t border-line mt-16">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-8 font-mono text-[11px] text-steel flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>© 2026 최연진 · JINJIN</span>
        <span>
          Built with Next.js · Pretendard / Wanted Sans / IBM Plex Mono ·{" "}
          <Link href={personalData.notion} target="_blank" className="text-accent hover:underline">
            Notion
          </Link>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
