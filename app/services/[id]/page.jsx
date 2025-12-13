import ServiceSidebar from "../_components/ServiceSidebar";
import ServiceFeed from "../_components/ServiceFeed";
import PageBanner from "@/components/PageBanner/PageBanner";

const ServiceDetails = () => {
  return (
    <>
      <section>
        <PageBanner heading={"Service Details"} subHeading={"Details"} />
        <div className="max-w-container px-container mx-auto py-20 ">
          <section className="flex flex-col-reverse lg:flex-row gap-14">
            <div className="basis-[340px]">
              <ServiceSidebar />
            </div>
            <div className="flex-1">
              <ServiceFeed />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
export default ServiceDetails;

export const metadata = {
  title: "Service Details - Techdoit",
  description: "Service Details page",
};
