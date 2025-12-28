import { formatDate, getMedia, getPostCategories } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { cache } from "react";
import Author from "../Author/Author";
import { FaCaretRight } from "react-icons/fa6";

const getBlogMedia = cache(async (id) => getMedia(id));
const getBlogCategories = cache(async (ids) => getPostCategories(ids));

const BlogCard = async ({ blog }) => {
  const media = await getBlogMedia(blog.featured_media);
  //const thumbnail = media.media_details.sizes.medium_large.source_url;

  const categories = await getBlogCategories(blog.categories);

  const category = categories[0];

  const formattedDate = formatDate(blog.modified);

  return (
    <article className="pb-10">
      {/*<div className="mb-8">
        <Image
          width={770}
          height={432}
          src={media}
          className="w-full h-[432px] rounded object-cover"
          alt={blog.title.rendered}
        />
      </div>*/}
      <header className="mb-4">
        <div className="flex items-center gap-5 mb-5">
          <Link
            className="h-10 text-sm uppercase text-white bg-purple rounded-md grid place-content-center w-fit px-3 hover:bg-navy-blue duration-500 transition-colors text-center"
            href={`https://blog.soulfisherdesigns.pro/category/${category.slug}`}
            target='_blank'
          >
            {category.name}
          </Link>
          <div className="hidden sm:block">
            <Author authorId={blog.author} otherInfo={formattedDate} />
          </div>
        </div>

        <Link
          href={`https://blog.soulfisherdesigns.pro/${blog.slug}`}
          target='_blank'
          className="text-3xl sm:text-4xl text-black font-bold font-rubik line-clamp-2 hover:text-purple  duration-500 transition-colors"
        >
          {blog.title.rendered}
        </Link>
      </header>
      <div
        dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered }}
        className="line-clamp-3 mb-5 text-lg text-blue-gray"
      ></div>
      <footer>
        <Link
          /*href={`/blog/${blog.slug}`}*/
            href={`https://blog.soulfisherdesigns.pro/${blog.slug}`}
          className="flex group w-fit items-center gap-2 text-navy-blue hover:text-purple duration-500 transition-colors"
        >
          <span className="font-bold   uppercase">Read More</span>
          <FaCaretRight className="text-purple text-xl group-hover:translate-x-2 duration-500 transition-transform" />
        </Link>
      </footer>
    </article>
  );
};
export default BlogCard;
