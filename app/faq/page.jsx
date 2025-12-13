import FAQ from "./_components/FAQ";
import { Collapsible } from "./_components/FAQContainer";
import PageBanner from "@/components/PageBanner/PageBanner";

const FAQPage = () => {
  return (
    <>
      <section>
        <PageBanner heading={"Faq Page"} subHeading={"Faq"} />
        <div className="max-w-container px-container mx-auto py-24 md:py-section">
          <FAQ />
          <div className="pt-24 sm:pt-section max-w-[890px] mx-auto">
            <header className="flex mb-16 items-center gap-2 justify-between">
              <h2
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold  "
              >
                Or more question?
              </h2>
              <div
                data-aos="fade-up"
                className="text-xl font-bold hidden sm:block"
              >
                👋 Say hello!
              </div>
            </header>
            <div className="flex flex-col gap-2">
              <Collapsible
                defaultOpen={true}
                question="Which technical skills would you improve?"
                answer="Your applicant may have limited help desk wexperience. In that case, look for applicants who are motivated to grow and have some transferable nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit moles accumsan  "
              />
              <Collapsible
                question="What do Logical Drives do?"
                answer="Your applicant may have limited help desk wexperience. In that case, look for applicants who are motivated to grow and have some transferable nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit moles accumsan  "
              />
              <Collapsible
                question="What about our safety measures? "
                answer="Your applicant may have limited help desk wexperience. In that case, look for applicants who are motivated to grow and have some transferable nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit moles accumsan  "
              />
              <Collapsible
                question="Can I success on this platform experience?"
                answer="Your applicant may have limited help desk wexperience. In that case, look for applicants who are motivated to grow and have some transferable nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit moles accumsan  "
              />
              <Collapsible
                question="What do Logical Drives do?"
                answer="Your applicant may have limited help desk wexperience. In that case, look for applicants who are motivated to grow and have some transferable nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit moles accumsan  "
              />
              <Collapsible
                question="What about our safety measures? "
                answer="Your applicant may have limited help desk wexperience. In that case, look for applicants who are motivated to grow and have some transferable nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit moles accumsan  "
              />
              <Collapsible
                question="Can I success on this platform experience?"
                answer="Your applicant may have limited help desk wexperience. In that case, look for applicants who are motivated to grow and have some transferable nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit moles accumsan  "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default FAQPage;

export const metadata = {
  title: "FAQ - Techdoit",
  description: "FAQ page",
};
