import { projectsData } from "@/utils/data/projects-data";
import SectionHead from "../section-head";
import ProjectCard from "./project-card";

function Projects() {
  return (
    <section id="projects" className="my-16 lg:my-24 scroll-mt-20">
      <SectionHead label="프로젝트 / Work" title="케이스." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {projectsData.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
