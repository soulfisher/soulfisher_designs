import Link from "next/link";
const Contact = () => {
  return (
    <section className="bg-navy-blue text-white py-20">
      <div className=" relative isolate max-w-7xl flex flex-col lg:flex-row mx-auto px-container gap-16 items-center">
        <div className="flex flex-col gap-5">
          <div>
            <h2
              data-aos="fade-up"
              className="font-bold mb-8  leading-snug text-4xl"
            >
              Let&rsquo;s Work together
            </h2>
            <h3 className="text-[26px] font-semibold from-navy-blue mb-3">
              Our Address
            </h3>
            <div className="text-blue-gray space-y-1 text-lg">
              <div>4856 Scotch Ct.</div>
              <div>Carmichael, CA 95608</div>
            </div>
          </div>
          <div>
            <h3 className="text-[26px] font-semibold from-navy-blue mb-3">
              Our Phone
            </h3>
            <div className="text-blue-gray space-y-1 text-lg">
              <div>Telephone : +1 916-290-3306</div>

            </div>
          </div>
          <div>
            <h3 className="text-[26px] font-semibold from-navy-blue mb-3">
              Our Email
            </h3>
            <div className="text-blue-gray space-y-1 text-lg">
              <div>Main Email : <Link href="mailto:contact@soulfisherdesigns.com">contact@soulfisherdesigns.com</Link></div>
              {/*<div>Inquiries : Info@orex.com</div>*/}
            </div>
          </div>
        </div>

        <div className="size-[189px] hidden lg:block absolute  rounded-full bg-purple top-5 2xl:-right-10 right-[6.25rem] z-0"></div>
        <div className="size-[118px] hidden lg:block absolute rounded-full bg-purple bottom-5 2xl:-left-10 left-[28.25rem] z-0"></div>

        <form className="py-16 w-full lg:basis-[769px] h-fit lg:py-16 border-2 bg-charcoal-blue/50 border-[#314068] relative  rounded-md flex flex-col  gap-10 lg:gap-0 backdrop-blur-md  px-10 lg:px-10  ">
          <div className="flex mb-8 flex-col gap-4">
            <div className="flex  gap-4 flex-col sm:flex-row ">
              <input
                className="px-4 sm:px-[18px] py-4 sm:py-[22px] rounded-md border-2 border-[#CDD0DA] text-navy-blue placeholder:text-navy-blue sm:text-lg w-full focus-visible:outline-purple"
                type="text"
                placeholder="Full Name"
                required
              />
              <input
                className="px-4 sm:px-[18px] py-4 sm:py-[22px] rounded-md border-2 border-[#CDD0DA] text-navy-blue placeholder:text-navy-blue sm:text-lg w-full focus-visible:outline-purple"
                placeholder="Phone Number"
                type="number"
                required
              />
            </div>
            <div className="flex  gap-4 flex-col sm:flex-row">
              <input
                className="px-4 sm:px-[18px] py-4 sm:py-[22px] rounded-md border-2 border-[#CDD0DA] text-navy-blue placeholder:text-navy-blue sm:text-lg w-full focus-visible:outline-purple"
                placeholder="Email Address"
                type="email"
                required
              />

              <input
                className="px-4 sm:px-[18px] py-4 sm:py-[22px] rounded-md border-2 border-[#CDD0DA] text-navy-blue placeholder:text-navy-blue sm:text-lg w-full focus-visible:outline-purple"
                type="text"
                placeholder="Subject"
                required
              />
            </div>
            <textarea
              className="px-4 sm:px-[18px] py-4 sm:py-[22px] rounded-md border-2 border-[#CDD0DA] text-navy-blue placeholder:text-navy-blue sm:text-lg w-full focus-visible:outline-purple h-[125px]"
              placeholder="Your Message"
              required
            />
          </div>
          <button className=" w-full  group  lg:w-fit   h-[50px] flex items-center justify-center py-4 px-8 border-2 border-blue-gray hover:bg-white hover:border-white hover:text-navy-blue duration-500 transition-all rounded-xl leading-none font-semibold gap-8">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
