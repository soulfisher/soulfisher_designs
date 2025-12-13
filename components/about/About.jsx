import Image from "next/image";
import { FaPhoneAlt, FaPlay } from "react-icons/fa";
import VideoButtonWrapper from "../button/VideoButtonWrapper";
import { FaCheck } from "react-icons/fa6";

const About = () => {
  return (
    <section>
      <div className="mx-auto max-w-container px-container py-20">
        <div className="flex pt-8 lg:items-center flex-col lg:flex-row gap-24">
          <div className="flex-1">
            <div className="relative max-w-lg mx-auto isolate">
              <Image
                width={500}
                height={680}
                alt="about"
                src="/about/about.jpg"
                className="w-full h-auto object-cover "
              />

              {/*<VideoButtonWrapper
                url={"https://www.youtube.com/watch?v=8oON21G1Bqg"}
              >
                <div
                  style={{
                    backgroundSize: "150%",
                  }}
                  className="absolute cursor-pointer group bg-[url('/about/video.jpg')] bg-no-repeat bg-cover bg-center bottom-1/4 shadow-card-3  right-1/3  lg:right-0 lg:translate-x-1/3 size-[160px]  sm:size-[200px] border-8 sm:border-[10px] border-white rounded-full "
                >
                  <div className="absolute inset-0 bg-navy-blue/75 rounded-full grid place-content-center text-4xl text-white group-hover:text-blue-500 duration-500 transition-all">
                    <FaPlay />
                  </div>
                </div>
              </VideoButtonWrapper>*/}
            </div>
          </div>
          <div className="basis-[570px]  ">
            <div
              data-aos="fade-up"
              className="flex text-blue-500 mb-4 font-medium  items-center gap-4"
            >
              <span className="w-20 h-[3px] bg-blue-500"></span>
              <span>Why Choose Us</span>
            </div>
            <h2
              data-aos="fade-up"
              className="font-bold mb-4 max-w-xl text-3xl  sm:leading-snug sm:text-4xl"
            >
              We Provide Best Solution For Your Business
            </h2>
            <p className="text-blue-gray max-w-[545px] mb-10">
              Soulfisher Designs has a demonstrated history of delivering high-quality, user-centric websites that align with clients’ strategic objectives and operational requirements. Our team consistently evaluates emerging tools, frameworks, and best practices to ensure our solutions remain modern, scalable, and competitive. This combination of experience and continuous innovation enables us to provide reliable digital products that support long-term business growth.
            </p>
            <div className="sm:grid-cols-2 gap-4 grid pb-12 mb-[38px] border-b border-[#D1D3F6]">
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-navy-blue font-rubik">
                  <FaCheck className="text-blue-500 text-lg" />
                  Expert Experience
                </li>
                <li className="flex items-center gap-4 text-navy-blue font-rubik">
                  <FaCheck className="text-blue-500 text-lg" />
                  Quality Products
                </li>
                <li className="flex items-center gap-4 text-navy-blue font-rubik">
                  <FaCheck className="text-blue-500 text-lg" />
                  Unique Approach
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-navy-blue font-rubik">
                  <FaCheck className="text-blue-500 text-lg" />
                  Competitive Pricing
                </li>
                <li className="flex items-center gap-4 text-navy-blue font-rubik">
                  <FaCheck className="text-blue-500 text-lg" />
                  Fast Delivery
                </li>
                <li className="flex items-center gap-4 text-navy-blue font-rubik">
                  <FaCheck className="text-blue-500 text-lg" />
                  Reliable Support
                </li>
              </ul>
            </div>
            <div className="grid sm:grid-cols-2">
              <article className="h-[100px] shadow-card border-l-[5px] border-blue-500 py-2 pl-10 flex items-center gap-4">
                <span className="text-[68px] font-rubik font-bold text-blue-500">
                  10
                </span>
                <span className="font-rubik font-bold">
                  Years Of <br />
                  experience
                </span>
              </article>
              <article className="h-[100px] py-2 pl-10 flex items-center gap-4">
                <div className="size-12 rounded-full grid place-content-center border-2 border-[#E5E7EC] text-lg text-blue-500">
                  <FaPhoneAlt />
                </div>
                <div>
                  <div className="text-blue-gray text-lg">Call Us</div>
                  <div className="text-navy-blue font-bold font-rubik">
                    916-290-3306
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
