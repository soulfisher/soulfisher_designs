import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";
import FAQContainer from "./FAQContainer";

const FAQ = () => {
  return (
    <section>
      <div className="flex flex-col gap-10 lg:flex-row max-w-container mx-auto px-container">
        <div className="flex-1">
          <h4
            data-aos="fade-up"
            className="text-purple uppercase font-bold mb-5 leading-none"
          >
            OUR QUESTIONS AND ANSWER
          </h4>
          <h2
            data-aos="fade-up"
            className="text-4xl sm:text-[60px] mb-14 font-bold leading-snug sm:leading-tight"
          >
            Things you need to know about us
          </h2>
          <div className="flex items-center group">
            <div className="flex items-center ">
              <Image
                width={100}
                height={100}
                alt="img"
                className="size-[60px] rounded-full object-cover "
                src="/placeholder.png"
              />
              <div className="border-[3px] border-purple group-hover:border-blue-500 rounded-full grid place-content-center group-hover:bg-blue-500 bg-purple  duration-300 transition-colors   -translate-x-8 text-2xl text-white size-[60px]">
                <FiPhoneCall />
              </div>
            </div>
            <div className="flex -translate-x-4 flex-col gap-1">
              <span className="inline-block text-sm text-dim-gray">
                Call us at
              </span>
              <span className="inline-block font-bold">+(602) 762 472 96</span>
            </div>
          </div>
        </div>
        <div className="lg:basis-[580px]">
          <FAQContainer />
        </div>
      </div>
    </section>
  );
};
export default FAQ;
