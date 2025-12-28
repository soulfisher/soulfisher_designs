import PageBanner from "@/components/PageBanner/PageBanner";
import BlogSidebar from "./_components/BlogSidebar/BlogSidebar";

export const metadata = {
  title: "Blog - Soulfisher Designs",
  description: "Blog page",
};

export default function RootLayout({ children }) {
  return (
    <>
      <div>
        <PageBanner heading="Blog" subHeading="Blog" />
        <div className="max-w-container py-24 md:py-section mx-auto px-container">
          <div className="flex flex-col md:flex-row gap-16 md:gap-7">
            <div className="flex-1">{children}</div>
            <aside className="md:basis-[370px]">
              <BlogSidebar />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
