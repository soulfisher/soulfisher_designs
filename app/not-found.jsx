import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner/PageBanner";

const NotFoundPage = () => {
  return (
    <>
      <section>
        <PageBanner heading="Error Page" subHeading={"404"} />

        <div className="max-w-[780px] flex flex-col gap-10 justify-center items-center pt-5 pb-24 mx-auto px-container">
          <Image
            width={780}
            height={600}
            alt="404"
            className="w-full h-auto"
            src={"/404.svg"}
          />
          <h2 className="text-3xl sm:text-4xl font-bold ">
            Oops! Page not found
          </h2>
          <Link
            href={"/"}
            className="bg-purple rounded grid place-content-center px-10 h-[60px]  w-fit font-semibold hover:bg-navy-blue text-white duration-500 transition-all mx-auto sm:mx-0"
          >
            Go to Home
          </Link>
        </div>
      </section>
    </>
  );
};
export default NotFoundPage;

export const metadata = {
  title: "Not Found - Techdoit",
  description: "404 page",
};
