import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

function ProjectCard({ project }) {
  return (
    <Link
      href={project.link}
      target="_blank"
      className="group block rounded-lg border border-line bg-card p-6 transition-all hover:border-ink hover:-translate-y-0.5"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-[11px] text-steel tracking-[0.08em]">{project.role}</span>
        <FiArrowUpRight className="text-steel group-hover:text-accent transition-colors" size={18} />
      </div>
      <h3 className="font-display text-xl font-bold text-ink mb-2">{project.name}</h3>
      <p className="text-[14.5px] text-[#2b3038] leading-relaxed mb-4">{project.summary}</p>
      <div className="flex flex-wrap gap-2">
        {project.tools.map((t) => (
          <span key={t} className="font-mono text-[11px] text-steel border border-line rounded px-2 py-0.5">
            {t}
          </span>
        ))}
      </div>
      <span className="font-mono text-[12px] text-ink group-hover:text-accent mt-4 inline-flex items-center gap-1.5 transition-colors">
        {project.linkLabel} ↗
      </span>
    </Link>
  );
}

export default ProjectCard;
