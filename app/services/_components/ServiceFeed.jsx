import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa";
import FAQContainer from "@/app/faq/_components/FAQContainer";

const ServiceFeed = () => {
  const features = [
    {
      title: "Product quality",
      description:
        "Automatically syncs across all your devices. You can also access.",
    },
    {
      title: "On demand design",
      description: "Images, videos, PDFs and audio files are supported.",
    },
    {
      title: "Choice of service",
      description: "Whatever your business needs, you can choose a service.",
    },
  ];

  return (
    <article>
      <Image
        height={400}
        width={740}
        className="w-full h-[400px] object-cover mb-10 rounded-2xl"
        alt=""
        src="/website.jpg"
      />
      <div className="mb-14">
        <h2 className="text-3xl leading-tight mb-6 font-bold ">
          Why is a website important for your business?
        </h2>
        <p className="text-slate-gray mb-10">
          A well-designed website serves as the cornerstone of a company’s digital presence, providing customers with a central and always-accessible source of information about your brand, products, and services. It not only establishes credibility and professionalism but also functions as a powerful marketing and conversion tool, enabling businesses to reach new audiences, communicate value, and drive measurable growth.
        </p>
        {/*<p className="text-slate-gray">
          We are committed to providing our clients with the highest quality IT
          services and support. We understand that IT is essential for your
          business, and we will work tirelessly to help you achieve your
          business goals.
        </p>*/}
      </div>

      <div className="text-dark-gray mb-14">
        <h2 className="text-2xl  mb-7 text-black  leading-snug font-bold ">
          Going beyond the usual
        </h2>
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-[10px]">
              <div className="text-white  grid place-content-center bg-blue-500 size-5 shrink-0 rounded-full text-sm mt-1">
                <FaCheck />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{feature.title}:</h3>
                <p className="text-slate-gray">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*<div className="mb-14">
        <article
          className=" flex items-start p-10 gap-10
         bg-purple rounded-[10px] text-white"
        >
          <FaQuoteLeft className=" hidden sm:block pb-16 text-9xl leading-[0px]" />

          <div>
            <p className="mb-7 text-2xl leading-snug">
              Websites require minimal maintenance, yet for peace of mind
              and optimal performance, our main expert technicians offer routine
              check-ups, performance assessments.
            </p>

            <div className=" flex items-center gap-2">
              <p className="font-semibold text-lg">Ralph Edwards</p>{" "}
              <div className="size-1 rounded-full bg-blue-500"></div>
              <p className="text-slate-gray text-sm">Developer</p>
            </div>
          </div>
        </article>
      </div>*/}

      {/*<div>
        <h2 className="text-3xl leading-tight mb-10 font-bold ">
          What answer are you find?
        </h2>
        <FAQContainer />
      </div>*/}
    </article>
  );
};
export default ServiceFeed;
