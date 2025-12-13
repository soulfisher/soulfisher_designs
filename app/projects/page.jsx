import PageBanner from "@/components/PageBanner/PageBanner";
import { projects } from "@/lib/data";
import ProjectCard from "./_components/ProjectCard";
import { LuBadgeCheck } from "react-icons/lu";
import Link from "next/link";

const Projects = () => {
  return (
    <div>
      <PageBanner heading={"Our Portfolio"} subHeading={"Projects"} />
      <section className="py-20  bg-light-gray">
        <div className="max-w-container mx-auto px-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="flex items-center gap-2 px-container  justify-center pt-16 text-slate-gray font-medium flex-col   text-center lg:text-start lg:items-start lg:flex-row"
        >
          <LuBadgeCheck className="text-purple text-2xl" />
          IT Technology service specially built for your business.{" "}
          <Link href="/contact" className="text-purple underline font-semibold">
            Get Your Solution
          </Link>
        </div>
      </section>
    </div>
  );
};
export default Projects;

export const metadata = {
  title: "Project - Techdoit",
  description: "Project page",
};
