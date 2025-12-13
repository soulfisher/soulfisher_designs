import { getAuthor } from "@/lib/utils";
import Image from "next/image";
import { cache } from "react";

const getPostAuthor = cache(async (id) => getAuthor(id));

const Author = async ({ authorId, otherInfo }) => {
  const author = await getPostAuthor(authorId);
  const image = author.avatar_urls["96"];

  return (
    <div>
      <div className="flex items-center gap-5">
        <Image
          width={36}
          height={36}
          alt={author.name}
          src={image}
          className="size-9 rounded-full object-cover"
        />
        <div className="flex flex-col gap-1 text-navy-blue">
          <h5 className="leading-none  font-medium uppercase">{author.name}</h5>
          <div className="text-sm">{otherInfo}</div>
        </div>
      </div>
    </div>
  );
};
export default Author;
