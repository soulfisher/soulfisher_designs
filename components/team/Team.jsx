"use client";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import useEmblaCarousel from "embla-carousel-react";

import { useCallback } from "react";
import { teamMembers } from "@/lib/data";
import TeamCard from "./TeamCard";
const Team = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    loop: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section>
      <div className="max-w-container py-20 mx-auto px-container">
        <div className="max-w-container mx-auto ">
          <header className=" flex justify-between mb-16">
            <div>
              <div className="lg:ml-10">
                <span
                  data-aos="fade-up"
                  className="font-medium text-blue-500 inline-block mb-3"
                >
                  Meet With Our Specialist
                </span>
                <h2
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold"
                >
                  {" "}
                  Our Team
                </h2>
              </div>
            </div>
            <div className="flex items-center  gap-5">
              <button
                onClick={scrollPrev}
                className="flex items-center justify-center rounded-full bg-white text-black hover:bg-purple border hover:text-white duration-500 transition-all size-12 text-lg shadow-card-2 "
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={scrollNext}
                className=" flex items-center justify-center rounded-full bg-white text-black hover:bg-purple border hover:text-white duration-500 transition-all size-12 text-lg shadow-card-2 "
              >
                <FaArrowRight />
              </button>
            </div>
          </header>
        </div>

        <div ref={emblaRef} className="mx-auto py-5 overflow-hidden ">
          <div className="flex items-center gap-7 pl-7">
            {teamMembers.map((team, index) => (
              <div
                className="grow-0 shrink-0 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                key={team.id}
              >
                <TeamCard team={team} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Team;
