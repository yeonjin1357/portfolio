import { experiences } from "@/utils/data/experience";
import SectionHead from "../section-head";

function Experience() {
  return (
    <section id="experience" className="my-16 lg:my-24 scroll-mt-20">
      <SectionHead label="경력 / Career" title="퍼블리셔에서 제품 화면 엔지니어로." />
      <div className="flex flex-col gap-4 mt-8">
        {experiences.map((e) => (
          <article
            key={e.id}
            className="rounded-lg border border-line bg-card p-6 grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-5"
          >
            <div className="font-mono text-xs text-steel">{e.duration}</div>
            <div>
              <h3 className="text-lg font-semibold text-ink">{e.company}</h3>
              <p className="font-mono text-[12.5px] text-accent mb-3">{e.role}</p>
              <ul className="list-disc ml-4 text-[#2b3038] text-[15px] space-y-1">
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-3">
                {e.tools.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] text-verified border border-[#bfe0d8] bg-[#eaf6f3] rounded px-2 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
