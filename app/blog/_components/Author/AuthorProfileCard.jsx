import { getAuthor } from "@/lib/utils";
import Image from "next/image";
import { cache } from "react";

import Link from "next/link";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import SocialIcon from "@/components/header/SocialIcon";

const getPostAuthor = cache(async (id) => getAuthor(id));

const AuthorProfileCard = async ({ authorId }) => {
  const author = await getPostAuthor(authorId);
  const image = author.avatar_urls["96"];

  return (
    <article className="p-10 rounded-lg bg-sky flex-col sm:flex-row flex items-center gap-10">
      <Image
        width={120}
        height={120}
        alt={author.name}
        src={image}
        className="size-[120px] rounded-full object-cover"
      />
      <div className="flex flex-col gap-2 ">
        <h5 className="text-2xl font-bold text-purple">{author.name}</h5>
        <p className="text-lg text-dim-gray">{author.description}</p>
        <div className="flex mt-2 items-center gap-4">
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
    </article>
  );
};
export default AuthorProfileCard;
