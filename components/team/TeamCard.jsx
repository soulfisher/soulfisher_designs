import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaLinkedinIn,
} from "react-icons/fa6";

const TeamCard = ({ team }) => {
  return (
    <article className="group">
      <div className="relative isolate rounded-[6px] overflow-hidden">
        <div className="flex flex-col z-10  gap-2 absolute top-10 left-10">
          <Link
            href={team.socialLinks.facebook}
            target="_blank"
            className="grid place-content-center size-10 rounded-full text-lg bg-white hover:bg-purple text-slate-gray hover:text-white -translate-x-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 will-change-transform duration-500 transition-all"
          >
            <FaInstagram />
          </Link>
          <Link
            href={team.socialLinks.instagram}
            target="_blank"
            className="grid place-content-center size-10 rounded-full text-lg bg-white hover:bg-purple text-slate-gray hover:text-white -translate-x-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 will-change-transform duration-500 transition-all"
          >
            <FaFacebookF />
          </Link>
          <Link
            href={team.socialLinks.linkedin}
            target="_blank"
            className="grid place-content-center size-10 rounded-full text-lg bg-white hover:bg-purple text-slate-gray hover:text-white -translate-x-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 will-change-transform duration-500 transition-all"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            href={team.socialLinks.pinterest}
            target="_blank"
            className="grid place-content-center size-10 rounded-full text-lg bg-white hover:bg-purple text-slate-gray hover:text-white -translate-x-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 will-change-transform duration-500 transition-all"
          >
            <FaPinterest />
          </Link>
        </div>
        <div className="block">
          <Image
            width={440}
            height={440}
            alt={team.name}
            src={team.image}
            className="w-full scale-110 group-hover:scale-100 duration-500 transition-transform will-change-transform  h-[440px] object-cover"
          />
        </div>
      </div>
      <div className="pt-6">
        <h3 className="text-2xl font-bold">{team.name}</h3>
        <span className="font-medium text-dim-gray">{team.role}</span>
      </div>
    </article>
  );
};
export default TeamCard;
