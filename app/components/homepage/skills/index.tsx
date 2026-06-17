import { skillGroups } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import SectionHead from "../section-head";

function Skills() {
  return (
    <section id="skills" className="my-16 lg:my-24 scroll-mt-20">
      <SectionHead label="기술 / Stack" title="JD에 맞춰 정렬한 역량." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {skillGroups.map((g) => (
          <div key={g.title} className="rounded-lg border border-line bg-card p-5">
            <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-steel mb-4">{g.title}</p>
            <div className="flex flex-wrap gap-2.5 items-center">
              {g.icons.map((s) => {
                const img = skillsImage(s);
                return (
                  <span
                    key={s}
                    className="inline-flex items-center gap-2 font-mono text-[12.5px] text-ink border border-line rounded-md px-2.5 py-1.5 bg-paper"
                  >
                    {img?.src && <Image src={img.src} alt="" width={16} height={16} className="w-4 h-4" />}
                    {s}
                  </span>
                );
              })}
              {g.extras.map((s) => (
                <span
                  key={s}
                  className="font-mono text-[12.5px] text-steel border border-line rounded-md px-2.5 py-1.5 bg-paper"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
