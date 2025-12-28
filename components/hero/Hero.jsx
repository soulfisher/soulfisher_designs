import Link from "next/link";
import PulsatingButton from "../ui/pulsating-button";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
} from "react-icons/fa6";
import DotPattern from "../ui/dot-pattern";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section
      className="bg-fixed bg-cover bg-no-repeat bg-left min-h-[750px]"
      style={{ backgroundImage: "url('/hero/hero-bg.webp')" }}
    >
      <div className="flex text-white min-h-[750px] max-w-container mx-auto px-container flex-col justify-center lg:justify-start lg:flex-row">
        <div className=" flex justify-center lg:justify-start items-center relative isolate">
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] "
            )}
          />
          <div className=" text-center lg:text-start">
            <h1
              data-aos="fade-up"
              className=" font-bold mt-10 sm:mt-0 mb-5 text-4xl leading-snug sm:text-5xl sm:leading-snug"
            >
              Delivering Superior <br /> Services{" "}
              <span className="text-blue-500">&amp; IT Solutions.</span>
            </h1>
            <p className="font-medium mb-8 max-w-[600px]">
              Where Strategic Design Meets Powerful Development.</p>
            <p className="font-medium mb-8 max-w-[600px]">By combining thoughtful, goal-driven design with robust, scalable development, we create solutions that are visually compelling, technically sound, and built to perform. This integrated approach ensures every website not only reflects your brand but also delivers usability, reliability, and measurable results.
            </p>

            <div className="flex justify-center lg:justify-start mb-5 items-center gap-3 flex-wrap">
              <Link
                href="https://instagram.com/solfshr"
                target="_blank"
                className="size-8 grid place-content-center rounded-lg text-sky-blue hover:bg-blue-500 hover:text-white  transition-all duration-500"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61584683163315"
                target="_blank"
                className="size-8 grid place-content-center rounded-lg text-sky-blue hover:bg-blue-500 hover:text-white  transition-all duration-500"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://linkedin.com/in/cassandra-cook-4851b98/"
                target="_blank"
                className="size-8 grid place-content-center rounded-lg text-sky-blue hover:bg-blue-500 hover:text-white  transition-all duration-500"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href="https://pinterest.com/cassandrac0517/"
                target="_blank"
                className="size-8 grid place-content-center rounded-lg text-sky-blue hover:bg-blue-500 hover:text-white  transition-all duration-500"
              >
                <FaPinterest />
              </Link>
            </div>

            {/*<div className="flex items-center gap-7 flex-col sm:flex-row justify-center lg:justify-start">
              <button className="group h-12 w-fit md:h-[50px] flex items-center justify-center py-4 px-8 border-2 border-blue-gray hover:bg-white hover:border-white hover:text-navy-blue duration-500 transition-all rounded-xl leading-none font-semibold gap-8">
                Get A Quote
              </button>
              <PulsatingButton>Book Appointment</PulsatingButton>
            </div>*/}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
