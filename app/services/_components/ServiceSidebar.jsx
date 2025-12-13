import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

export const categories = [
  {
    id: 1,
    label: "Digital Solutions",
    href: "/categories/digital-solutions",
  },
  {
    id: 2,
    label: "UI / UX Designing",
    href: "/categories/it-service",
  },
  /*{
    id: 3,
    label: "IT Service",
    href: "/categories/ui-ux-designing",
  },
  {
    id: 4,
    label: "Digital Marketing",
    href: "/categories/digital-marketing",
  },
  {
    id: 5,
    label: "Branding",
    href: "/categories/branding",
  },
  {
    id: 6,
    label: "Security System",
    href: "/categories/security-system",
  },*/
];

const ServiceSidebar = () => {
  return (
    <aside className="flex flex-col gap-7">
      <div className="bg-sky-blue p-9">
        <h5 className="mb-5  sm:text-[22px] text-lg font-bold">Categories</h5>
        <div className="flex flex-col gap-2">
          {categories.map((category) => (
            <Link
              className="p-5 h-[52px] hover:bg-purple hover:text-white text-black transition-all font-semibold duration-500 bg-white  flex items-center justify-between rounded"
              key={category.id}
              target="_blank"
              href=""
            >
              <span>{category.label}</span>
              {/*<FaArrowRightLong />*/}
            </Link>
          ))}
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="h-[300px] rounded-2xl relative  flex flex-col justify-center items-center px-10 bg-purple bg-no-repeat bg-center bg-cover text-white overflow-hidden isolate"
      >
        <div className="inset-0 absolute bg-service-details-effect bg-no-repeat bg-center bg-cover"></div>
        <div className="relative z-10">
          <h5 className="text-[25px] mb-7 leading-normal font-semibold  max-w-56 text-center">
            Any questions? Let’s talk
          </h5>

          <Link
            href="tel:+19162903306"
            className="flex items-center  mb-5 text-black px-7 bg-sky hover:bg-black duration-300 transition-colors font-semibold w-fit hover:text-white rounded-[6px]  mx-auto  h-11"
          >
            Let’s Talk <FaExternalLinkAlt className="ml-2" />
          </Link>

          <div className="flex items-center justify-center gap-2">
            <FaPhone className="text-blue text-white fill-white text-2xl" />
            <span className="text-lg font-semibold">+1 (916) 290-3306</span>
          </div>
        </div>
        <div className="absolute inset-0 bg-blue/80"></div>
      </div>
    </aside>
  );
};
export default ServiceSidebar;
