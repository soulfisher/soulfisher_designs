import { cache } from "react";

import SideBarHeading from "./SideBarHeading";
import { fetchTags } from "@/lib/utils";
import Link from "next/link";
const getTags = cache(async (id) => fetchTags());

const PopularTags = async () => {
  const tags = await getTags();

  return (
    <section>
      <SideBarHeading>Popular Tags</SideBarHeading>
      <div className="flex mt-10 flex-wrap gap-3">
        {tags.map((tag) => (
          <Link
            className="h-10 rounded-full border grid place-content-center hover:bg-purple hover:text-white px-[18px] shadow-card-2 duration-[400ms] transition-colors text-black"
            key={tag.slug}
            href={`/tags/${tag.slug}`}
          >
            {tag.name}
          </Link>
        ))}
      </div>
    </section>
  );
};
export default PopularTags;
