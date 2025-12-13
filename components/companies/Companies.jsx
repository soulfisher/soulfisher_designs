"use client";

import Image from "next/image";
import Marquee from "../ui/marquee";

const companies = [
  {
    id: 1,
    image: "/placeholder.png",
  },
  {
    id: 2,
    image: "/placeholder.png",
  },
  {
    id: 3,
    image: "/placeholder.png",
  },
  {
    id: 4,
    image: "/placeholder.png",
  },
];

const Companies = () => {
  return (
    <section className="bg-sky-blue py-20">
      <div className=" relative px-container ">
        <Marquee pauseOnHover className="[--duration:30s]">
          <div className="flex justify-evenly items-center flex-wrap">
            <Image
              className=" mx-8 md:mx-10 lg:mx-16"
              src="/companies/c1.svg"
              width={110}
              height={60}
              alt=""
            />
            <Image
              className=" mx-8 md:mx-10 lg:mx-16"
              src="/companies/c2.svg"
              width={110}
              height={60}
              alt=""
            />

            <Image
              className=" mx-8 md:mx-10 lg:mx-16"
              src="/companies/c3.svg"
              width={110}
              height={60}
              alt=""
            />
            <Image
              className=" mx-8 md:mx-10 lg:mx-16"
              src="/companies/c4.svg"
              width={110}
              height={60}
              alt=""
            />
            <Image
              className=" mx-8 md:mx-10 lg:mx-16"
              src="/companies/c5.svg"
              width={110}
              height={60}
              alt=""
            />
            <Image
              className=" mx-8 md:mx-10 lg:mx-16"
              src="/companies/c6.svg"
              width={110}
              height={60}
              alt=""
            />
          </div>
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-sky-blue z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-sky-blue z-10"></div>
      </div>
    </section>
  );
};
export default Companies;
