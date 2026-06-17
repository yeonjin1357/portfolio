import { personalData } from "@/utils/data/personal-data";
import SectionHead from "../section-head";

const META = [
  ["name", "최연진 (JINJIN)"],
  ["role", "Frontend"],
  ["now", "Exem · exemONE"],
  ["focus", "데이터 시각화 · a11y"],
];

function AboutSection() {
  return (
    <section id="about" className="my-16 lg:my-24 scroll-mt-20">
      <SectionHead label="관측자 / About" title="화면 완성도를 측정 가능한 것으로." />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 lg:gap-12 items-start mt-8">
        <p className="text-[#2b3038] whitespace-pre-line text-[15px] lg:text-[17px] leading-[1.9]">
          {personalData.description}
        </p>
        <aside className="rounded-lg border border-line bg-card p-5 font-mono text-[12.5px] text-steel">
          {META.map(([k, v], i) => (
            <div
              key={k}
              className={`flex justify-between gap-3 py-2 ${i < META.length - 1 ? "border-b border-dashed border-line" : ""}`}
            >
              <span>{k}</span>
              <b className="text-ink font-semibold text-right">{v}</b>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}

export default AboutSection;
