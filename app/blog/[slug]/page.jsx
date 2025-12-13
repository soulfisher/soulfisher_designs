import { cache } from "react";

import Link from "next/link";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa6";

import {
  fetchCommentsByPostId,
  fetchPostBySlug,
  formatDate,
  getMedia,
  getPostCategories,
  fetchTagsById,
} from "@/lib/utils";

import Image from "next/image";

import "./blog-styles.css";

import Author from "../_components/Author/Author";
import Comments from "../_components/Comments";
import AuthorProfileCard from "../_components/Author/AuthorProfileCard";
import SocialIcon from "@/components/header/SocialIcon";
import Reply from "../_components/Reply";

const getBlog = cache(async (slug) => fetchPostBySlug(slug));
const getBlogMedia = cache(async (id) => getMedia(id));
const getBlogCategories = cache(async (ids) => getPostCategories(ids));
const getBlogComments = cache(async (id) => fetchCommentsByPostId(id));
const getBlogTags = cache(async (id) => fetchTagsById(id));

const BlogDetailsPage = async ({ params }) => {
  const blog = await getBlog(params.slug);
  const media = await getBlogMedia(blog.featured_media);
  const categories = await getBlogCategories(blog.categories);
  const comments = await getBlogComments(blog.id);
  const tags = await getBlogTags(blog.id);

  const thumbnail = media.media_details.sizes.medium_large.source_url;
  const title = blog.title.rendered;
  const category = categories[0];
  const formattedDate = formatDate(blog.modified);

  return (
    <>
      <div>
        <div className="max-w-container  mx-auto px-container">
          <div className="flex flex-col md:flex-row gap-16 md:gap-7">
            <div className="flex-1">
              <header className="mb-8">
                <div className="flex flex-wrap items-center gap-5 mb-6">
                  <Link
                    className="h-10 text-sm  uppercase text-white bg-purple rounded-md grid place-content-center w-fit px-3 hover:bg-navy-blue duration-300 transition-colors text-center"
                    href={`/category/${category.slug}`}
                  >
                    {category.name}
                  </Link>

                  <Author authorId={blog.author} otherInfo={formattedDate} />

                  <div className="ml-3 text-sm">
                    Comment ({comments.length})
                  </div>
                </div>
                <h1 className="text-4xl sm:text-[44px] font-bold font-rubik sm:leading-snug">
                  {title}
                </h1>
              </header>
              <section>
                <article
                  dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered }}
                  className="text-lg mb-9"
                ></article>
                <div className="mb-10">
                  <Image
                    width={770}
                    height={432}
                    src={thumbnail}
                    className="w-full h-[432px] rounded object-cover"
                    alt={blog.title.rendered}
                  />
                </div>
                <div
                  className="rendered-content"
                  dangerouslySetInnerHTML={{ __html: blog.content.rendered }}
                ></div>
              </section>
              <footer className="mb-16 ">
                <div className="flex mt-16 mb-16 items-center justify-between gap-2">
                  <div>
                    <div className="flex  flex-wrap gap-3">
                      {tags.map((tag) => (
                        <Link
                          className="h-10 rounded-full font-rubik grid place-content-center hover:bg-purple border hover:text-white px-[18px] shadow-card-2 duration-[400ms] transition-colors text-black"
                          key={tag.slug}
                          href={`/tags/${tag.slug}`}
                        >
                          {tag.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-5">
                      <Link target="_blank" href="https://www.facebook.com">
                        <SocialIcon
                          className="hover:text-purple text-[#9BA2B4] hover:scale-105 will-change-transform duration-300 transition-all"
                          Icon={FaFacebookF}
                        />
                      </Link>

                      <Link target="_blank" href="https://www.instagram.com">
                        <SocialIcon
                          className="hover:text-purple text-[#9BA2B4] hover:scale-105 will-change-transform duration-300 transition-all"
                          Icon={FaInstagram}
                        />
                      </Link>
                      <Link target="_blank" href="https://www.linkedin.com">
                        <SocialIcon
                          className="hover:text-purple text-[#9BA2B4] hover:scale-105 will-change-transform duration-300 transition-all"
                          Icon={FaLinkedinIn}
                        />
                      </Link>
                      <Link target="_blank" href="https://twitter.com">
                        <SocialIcon
                          className="hover:text-purple text-[#9BA2B4] hover:scale-105 will-change-transform duration-300 transition-all"
                          Icon={FaTwitter}
                        />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex py-8 border-y border-dashed border-[#AAB0BF] items-center justify-between">
                  <Link
                    href={`/blog-details/${blog.slug}`}
                    className={"text-navy-blue group flex flex-col gap-4"}
                  >
                    <span
                      className={
                        "flex group-hover:text-purple duration-300 transition-colors items-center gap-3 "
                      }
                    >
                      <FaAngleLeft />
                      <span className="flex items-center gap-2  font-medium uppercase font-rubik">
                        <span>previous</span>
                        <span>01</span>
                      </span>
                    </span>
                    <span className="hidden sm:block max-w-[240px]  font-medium">
                      Lorem available market standard dummy text .
                    </span>
                  </Link>

                  <Link
                    href={`/blog-details/${blog.slug}`}
                    className={"text-navy-blue group flex flex-col gap-4"}
                  >
                    <span
                      className={
                        "flex group-hover:text-purple duration-300 transition-colors flex-row-reverse items-center gap-3 "
                      }
                    >
                      <FaAngleRight />
                      <span className="flex items-center gap-2  font-medium uppercase font-rubik">
                        <span>Next</span>
                        <span>03</span>
                      </span>
                    </span>
                    <span className="max-w-[240px] text-end  font-medium hidden sm:block ">
                      Lorem available market standard dummy text .
                    </span>
                  </Link>
                </div>
              </footer>
              <div className="mb-16">
                <AuthorProfileCard authorId={blog.author} />
              </div>
              <div className="mb-16">
                <Comments comments={comments} />
              </div>
              <div>
                <Reply />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogDetailsPage;
