"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";

import FlipMove from "react-flip-move";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { projectCategories, projects } from "@/lib/data";

const Portfolio = () => {
  const [currentCategory, setCurrentCategory] = useState(projectCategories[0]);

  return (
    <section>
      <div className="py-20 max-w-container px-container mx-auto">
        <header className="text-center mb-14 ">
          <span
            data-aos="fade-up"
            className="font-medium text-blue-500 inline-block mb-3"
          >
            Completed Projects
          </span>
          <h2 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
            {" "}
            Our Portfolio
          </h2>
        </header>

        <div>
          <div className="flex flex-wrap px-4 gap-5 md:gap-10 lg:gap-14 items-center justify-center mb-14">
            {projectCategories.map((category) => (
              <div key={category?.id}>
                <button
                  key={category.id}
                  onClick={() => setCurrentCategory(category)}
                  className={twMerge(
                    "uppercase pb-2 border-b-2 border-transparent  text-base font-bold transition-all duration-300",
                    currentCategory.name === category.name &&
                      "border-blue-500 text-blue-500"
                  )}
                >
                  {category?.name}
                </button>
              </div>
            ))}
          </div>
          <FlipMove className="projects-grid ">
            {projects
              ?.filter((item) =>
                currentCategory.name === "All"
                  ? item
                  : item.category === currentCategory.name
              )
              .map((project) => (
                <div key={project.id}>
                  <article className="h-fit group overflow-hidden">
                    <div className="relative isolate">
                      <Image
                        width={380}
                        height={630}
                        alt={project.title}
                        src={project.image}
                        className="w-full h-auto"
                      />
                      <div className="absolute inset-0 bg-blue5text-blue-500 bg-opacity-0 group-hover:bg-opacity-70 duration-500 transition-all flex items-end p-4">
                        <div className="bg-white translate-y-2/3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 duration-500 transition-all will-change-transform p-5 rounded-md w-full flex items-center justify-between gap-2">
                          <div>
                            <h5 className="text-blue-500 font-bold line-clamp-1">
                              {project.title}
                            </h5>
                            <span className="inline-block text-lg to-blue-gray">
                              {project.category}
                            </span>
                          </div>
                          <Link
                              href={project.href}
                              target="_blank"
                            className="size-11 grid place-content-center rounded-md bg-blue-500 text-white text-lg"
                          >
                            <FaArrowRightLong />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
          </FlipMove>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
