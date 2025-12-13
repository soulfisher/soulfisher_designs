import { blogsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <section>
      <div className="py-24 md:py-section max-w-container mx-auto px-container">
        <header className="text-center mb-14 ">
          <span
            data-aos="fade-up"
            className="font-medium text-blue-500 inline-block mb-3"
          >
            Our blog
          </span>
          <h2 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
            Blog for You
          </h2>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {blogsData.map((blog) => (
            <Link
              href={`blog/how-to-optimise-and-webinar-to-earn-leads`}
              className="group overflow-hidden rounded-md"
              key={blog.id}
            >
              <div className="border-t-2 relative isolate text-navy-blue border-x-2 border-[#F0F4F9] rounded-t-md">
                <span className="absolute left-0 right-0 -translate-y-1/2 h-1 bg-purple top-0 inline-block mx-6 scale-0 group-hover:scale-100 duration-500 transition-all rounded"></span>

                <div className="px-6 pb-5 mt-7">
                  <span className="font-bold inline-block font-rubik text-purple mb-3">
                    {blog.category}
                  </span>
                  <h5 className="line-clamp-2 text-xl leading-snug font-medium">
                    {blog.title}
                  </h5>
                </div>
                <div className="px-6 border-[#F0F4F9]  border-t-2 pt-[18px] font-rubik text-sm pb-5">
                  Publish by Admin at {blog.publishAt}
                </div>
              </div>
              <div className="overflow-hidden">
                <Image
                  width={370}
                  height={250}
                  alt={blog.title}
                  src={blog.image}
                  className="w-full  group-hover:scale-105 duration-500 transition-all h-[250px] rounded-md object-cover group-hover:brightness-105"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Blog;
