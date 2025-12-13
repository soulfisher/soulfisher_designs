import { formatDate } from "@/lib/utils";
import Image from "next/image";

const Comments = ({ comments }) => {
  return (
    <section>
      <div>
        <h2 className="text-5xl mb-1   font-bold font-rubik">Comments</h2>
        <span className="block h-[3px] bg-purple w-[50px]"></span>
      </div>
      <div className="flex flex-col mt-14 gap-7">
        {comments.map((comment) => (
          <article
            className="rounded-lg border border-[#D1D1D1] flex items-start sm:gap-10 p-10"
            key={comment.id}
          >
            <Image
              width={97}
              height={97}
              alt={comment.author_name}
              src={comment.author_avatar_urls["96"]}
              className="size-[97px] shrink-0 hidden sm:block rounded-full object-cover"
            />

            <div>
              <div className="mb-2">
                <h5 className="text-xl font-bold font-rubik">
                  {comment.author_name}
                </h5>
                <span className="text-sm font-medium">
                  {formatDate(comment.date)}
                </span>
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: comment.content.rendered }}
                className={"max-w-[532px] mb-2 text-lg text-dim-gray"}
              ></div>
              <div className="flex font-medium text-sm uppercase  items-center gap-7">
                <div className="hover:text-purple duration-300 transition-colors cursor-pointer">
                  Like
                </div>
                <div className="hover:text-purple duration-300 transition-colors cursor-pointer">
                  Reply
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
export default Comments;
