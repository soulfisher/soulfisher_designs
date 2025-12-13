import { cache } from "react";
import { FaCaretRight } from "react-icons/fa6";
import SideBarHeading from "./SideBarHeading";
import { fetchRecentPosts } from "@/lib/utils";
import Link from "next/link";
const getRecentPosts = cache(async (id) => fetchRecentPosts());

const RecentPost = async () => {
  const posts = await getRecentPosts();

  return (
    <section>
      <SideBarHeading>Recent Post</SideBarHeading>
      <div className="flex mt-10 flex-col">
        {posts?.map((post) => (
          <Link
            className="flex items-start gap-4 pb-5 mb-5 border-b pr-2 border-dashed border-navy-blue/20 group"
            href={`/blog/${post.slug}`}
            key={post.slug}
          >
            <FaCaretRight className=" text-navy-blue/20 text-[22px] group-hover:translate-x-2 group-hover:text-purple duration-[400ms]  transition-all " />
            <span className="font-rubik text-navy-blue group-hover:text-purple duration-[400ms] transition-colors font-medium">
              {post.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default RecentPost;
