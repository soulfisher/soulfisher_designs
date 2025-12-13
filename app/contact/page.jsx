import Link from "next/link";
import PageBanner from "@/components/PageBanner/PageBanner";

const ContactPage = () => {
  return (
    <>
      <section>
        <PageBanner heading={"Contact Us"} subHeading={"contact"} />

        <div className="max-w-container px-container mx-auto py-24 md:py-section">
          <div className="grid gap-20  lg:grid-cols-2 mb-20 md:mb-24">
            <div>
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.7899841610865!2d-121.32724788875727!3d38.65370907165934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ade935aa0abcd%3A0xc81c9742a0650ce6!2s4856%20Scotch%20Ct%2C%20Carmichael%2C%20CA%2095608!5e0!3m2!1sen!2sus!4v1765598926473!5m2!1sen!2sus"
                  width="600"
                  height="470"
                  className=" w-full h-[520px] rounded-2xl"
                  style={{border: 0}}
                  allowFullScreen
              ></iframe>
            </div>
            <div>
              <div className="mb-9">
                <h2
                    data-aos="fade-up"
                    className="text-dark mb-6 text-4xl md:text-5xl font-bold font-space_grotesk"
                >
                  Let’s Get in Touch
                </h2>
                <p className="leading-loose text-dim-gray ">
                  Let’s connect to discuss your website and marketing requirements in detail. We would welcome the opportunity to understand your goals and outline how our solutions can support your business objectives.
                </p>
              </div>
              <div>
                <h5 className="text-blue font-bold font-space_grotesk text-2xl mb-6">
                  Contact Info
                </h5>
                <div className="mb-9 flex flex-col gap-5">
                  <div>
                    <h6 className="font-bold mb-1 text-lg text-black">
                      Address
                    </h6>
                    <div className="text-dim-gray">
                      4856 Scotch Ct. Carmichael, CA 95608
                    </div>
                  </div>

                  <div>
                    <h6 className="font-bold mb-1 text-lg text-black">Phone</h6>
                    <div className="text-dim-gray">
                      +1 (916) 290-3306
                    </div>
                  </div>
                  <div>
                    <h6 className="font-bold mb-1 text-lg text-black">Email</h6>
                    <div className="text-dim-gray">
                      <Link href="mailto:contact@soulfisherdesigns.com">contact@soulfisherdesigns.com</Link>
                    </div>
                  </div>
                </div>

                <Link
                  target="_blank"
                  className="text-lg font-bold text-blue-500 tracking-[6px] hover:underline"
                  href="/"
                >
                  www.soulfisherdesigns.com
                </Link>
              </div>
            </div>
          </div>

          <form className="bg-sky py-10 p-5  sm:p-10 md:p-16 xl:p-[75px] rounded-2xl">
            <header className="mb-10">
              <h3
                data-aos="fade-up"
                className="text-dark mb-2 text-3xl sm:text-4xl font-bold font-space_grotesk"
              >
                Contact With Us
              </h3>
              <p data-aos="fade-up" className="text-sm text-dim-gray ">
                Your email address will not be published. Required fields are
                marked *
              </p>
            </header>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col md:flex-row gap-5">
                <input
                  required
                  type="text"
                  placeholder="Your Name*"
                  className="bg-white text-dim-gray w-full focus-visible:outline-blue-500 placeholder:text-dim-gray rounded-2xl  py-4 sm:py-5 px-6 sm:px-8"
                />
                <input
                  required
                  type="email"
                  placeholder="Your Email*"
                  className="bg-white text-dim-gray w-full focus-visible:outline-blue-500 placeholder:text-dim-gray rounded-2xl  py-4 sm:py-5 px-6 sm:px-8"
                />
              </div>
              <input
                required
                type="text"
                placeholder="Your Website*"
                className="bg-white text-dim-gray w-full focus-visible:outline-blue-500 placeholder:text-dim-gray rounded-2xl  py-4 sm:py-5 px-6 sm:px-8"
              />
              <textarea
                required
                placeholder="Write Message*"
                className="bg-white text-dim-gray w-full focus-visible:outline-blue-500 h-36 placeholder:text-dim-gray rounded-2xl  py-4 sm:py-5 px-6 sm:px-8"
              />
              <button className=" w-full bg-blue-500 text-white  group  lg:w-fit   h-[50px] flex items-center justify-center py-4 px-6 sm:px-8 border-2 border-blue-500 hover:bg-white hover:border-white hover:text-navy-blue duration-500 transition-all rounded-xl leading-none font-semibold gap-8">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export default ContactPage;

export const metadata = {
  title: "Contact Us - Techdoit",
  description: "Contact Us page",
};
