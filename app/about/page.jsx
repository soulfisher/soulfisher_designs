import About from "@/components/about/About";
import Companies from "@/components/companies/Companies";
import PageBanner from "@/components/PageBanner/PageBanner";
import Pricing from "@/components/pricing/Pricing";
import Reviews from "@/components/reviews/Reviews";
import Stats from "@/components/stats/Stats";

const AboutUsPage = () => {
  return (
    <>
      <section>
        <PageBanner heading={"About Us"} subHeading={"About"} />

        <div className="pb-20">
          <About />
        </div>
      </section>
    </>
  );
};
export default AboutUsPage;

export const metadata = {
  title: "About Us - Soulfisher Designs",
  description: "About Us page",
};
