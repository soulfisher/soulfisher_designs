import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const ProjectCard = ({ project }) => {
  return (
    <article className="overflow-hidden group rounded-2xl">
      <div className="relative group isolate">
        <Image
          className="w-full object-cover h-[480px]"
          src={project.image}
          width={470}
          height={480}
          alt={project.title}
        />
        <div className="bg-blue-500 bg-opacity-0 duration-500 transition-all group-hover:bg-opacity-80 text-white  flex items-end justify-center absolute inset-0 ">
          <div className="relative flex flex-col justify-center items-center gap-1 z-20 pb-10">
            <div className="text-sm group-hover:opacity-100 duration-500 transition-all opacity-100 sm:opacity-0  font-bold uppercase text-ash">
              {project.category}
            </div>
            <h5 className="font-bold duration-500 transition-all    text-2xl opacity-100 sm:opacity-0  group-hover:opacity-100 will-change-transform">
              {project.title}
            </h5>
          </div>
          <div className="bottom-0 left-0 right-0 h-[342px] bg-black absolute  rounded-full flex justify-center sm:translate-y-full duration-500 transition-all translate-y-1/2  will-change-transform group-hover:translate-y-1/2">
            <Link
              className="flex items-center justify-center rounded-full bg-white text-black hover:bg-purple hover:text-white duration-500 transition-all size-12 text-lg shadow-card-2 -translate-y-1/2 opacity-100 sm:opacity-0 will-change-transform group-hover:opacity-100"
              href={project.href}
              target="_blank"
            >
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
export default ProjectCard;
