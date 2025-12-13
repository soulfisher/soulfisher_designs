import Link from "next/link";
import SocialIcon from "./SocialIcon";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
const SocialLinks = () => {
  return (
    <div className="flex items-center gap-5">
      <Link target="_blank" href="https://www.facebook.com">
        <SocialIcon
          className="hover:text-sky-blue hover:scale-105 will-change-transform duration-500 transition-all"
          Icon={FaFacebookF}
        />
      </Link>

      <Link target="_blank" href="https://www.instagram.com">
        <SocialIcon
          className="hover:text-sky-blue hover:scale-105 will-change-transform duration-500 transition-all"
          Icon={FaInstagram}
        />
      </Link>
      <Link target="_blank" href="https://www.linkedin.com">
        <SocialIcon
          className="hover:text-sky-blue hover:scale-105 will-change-transform duration-500 transition-all"
          Icon={FaLinkedinIn}
        />
      </Link>
      <Link target="_blank" href="https://twitter.com">
        <SocialIcon
          className="hover:text-sky-blue hover:scale-105 will-change-transform duration-500 transition-all"
          Icon={FaTwitter}
        />
      </Link>
    </div>
  );
};
export default SocialLinks;
