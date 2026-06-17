import Link from "next/link";

const LINKS = [
  ["#about", "ABOUT"],
  ["#experience", "CAREER"],
  ["#skills", "STACK"],
  ["#projects", "WORK"],
  ["#blogs", "LOG"],
  ["#contact", "CONTACT"],
];

function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur-sm border-b border-line">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] flex items-center justify-between py-4 font-mono text-xs">
        <Link href="/" className="text-ink font-semibold tracking-tight">
          최연진 <span className="text-steel">· JINJIN</span>
        </Link>
        <nav className="hidden md:flex gap-5 text-steel" aria-label="섹션 내비게이션">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} className="hover:text-accent transition-colors">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
