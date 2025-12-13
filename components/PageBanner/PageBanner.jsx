import Link from "next/link";

const PageBanner = ({ heading, subHeading }) => {
  return (
    <header
      className={`flex bg-[url('/bg_tech.jpg')] bg-cover bg-center items-center justify-center min-h-[350px] relative isolate`}
    >
      <div className="flex min-w-container mx-auto px-container font-rubik text-center relative z-10 flex-col gap-4 text-white">
        <h3 className="text-4xl font-bold">{heading}</h3>
        <div className="flex  text-lg justify-center items-center gap-2">
          <Link
            className="hover:text-purple  duration-300 transition-colors"
            href="/"
          >
            Home
          </Link>
          <span>|</span>
          <span>{subHeading}</span>
        </div>
      </div>
      <div className="absolute inset-0 bg-[rgba(8,24,69,0.87)] "></div>
    </header>
  );
};
export default PageBanner;
