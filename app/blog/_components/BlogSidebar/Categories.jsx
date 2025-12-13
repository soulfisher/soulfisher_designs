import { cache } from "react";
import { FaCaretRight } from "react-icons/fa6";
import SideBarHeading from "./SideBarHeading";
import { fetchCategories } from "@/lib/utils";
import Link from "next/link";
const getCategories = cache(async (id) => fetchCategories());

const Categories = async () => {
  const categories = await getCategories();

  return (
    <section>
      <SideBarHeading>Categories</SideBarHeading>
      <div className="flex mt-10 flex-col">
        {categories?.map((category) => (
          <Link
            className="flex items-start gap-4 pb-5 mb-5 border-b pr-2 border-dashed border-navy-blue/20 group"
            href={`/blog/categories/${category.slug}`}
            key={category.slug}
          >
            <FaCaretRight className=" text-navy-blue/20 text-[22px] group-hover:translate-x-2 group-hover:text-purple duration-[400ms]  transition-all " />
            <span className="font-rubik text-navy-blue group-hover:text-purple duration-[400ms] transition-colors font-extrabold">
              {category.name}
            </span>
            <span className="font-medium group-hover:text-purple duration-[400ms] transition-colors ml-auto">
              ( {category.numberOfPost} )
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default Categories;
