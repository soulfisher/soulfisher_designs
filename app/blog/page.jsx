import Link from "next/link";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
import BlogCard from "./_components/BlogCard/BlogCard";

const BlogPage = async ({ searchParams }) => {
  const postsPerPage = 5;
  const page = parseInt(searchParams?.page || 1);

  const response = await fetch(
    `https://blog.soulfisherdesigns.pro/wp-json/wp/v2/posts?page=${page}&per_page=${postsPerPage}`
  );

  if (!response.ok) {
    return <div>Something went wrong!</div>;
  }

  const posts = await response.json();
  const totalPages = parseInt(response.headers.get("x-wp-totalpages"));

  return (
    <section>
      <div className="flex flex-col gap-5 mb-14 md:mb-20">
        {posts.map((post) => (
          <BlogCard key={post.id} blog={post} />
        ))}
      </div>
      <div className="flex items-center gap-3 justify-center">
        {page > 1 && (
          <Link
            className="size-10 md:size-[60px] rounded-full bg-sky-blue text-black text-xl md:text-2xl grid place-content-center duration-500 transition-colors hover:bg-purple hover:text-white"
            href={`https://blog.soulfisherdesigns.pro?page=${page - 1}`}
          >
            <FaAngleLeft />
          </Link>
        )}

        {[...Array(totalPages)].map((_, index) => (
          <Link
            className={twMerge(
              "size-10 md:size-[60px] rounded-full  text-xl grid place-content-center duration-500 transition-colors hover:bg-purple hover:text-white",
              page === index + 1
                ? "bg-purple text-white"
                : "bg-sky-blue text-black"
            )}
            key={index}
            href={`https://blog.soulfisherdesigns.pro?page=${index + 1}`}
          >
            {index + 1}
          </Link>
        ))}

        {page < totalPages && (
          <Link
            className="size-10 md:size-[60px] rounded-full bg-sky-blue text-black text-xl md:text-2xl grid place-content-center duration-500 transition-colors hover:bg-purple hover:text-white"
            href={`https://blog.soulfisherdesigns.pro?page=${page + 1}`}
          >
            <FaAngleRight />
          </Link>
        )}
      </div>
    </section>
  );
};
export default BlogPage;
