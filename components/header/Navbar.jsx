"use client"
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import useScroll from "@/hooks/useScroll";

export const navLinks = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "About Us",
    href: "/about",
  },
  {
    id: 3,
    label: "Services",
    href: "/services",
  },
  {
    id: 4,
    label: "Projects",
    href: "/projects",
  },
  {
    id: 5,
    label: "Blog",
    href: "/blog",
  },
  {
    id: 6,
    label: "Contact",
    href: "/contact",
  },
];

const scrollHight = 144;

const Navbar = () => {
  const scroll = useScroll();
  const scrollDir = scroll.y > scrollHight ? "down" : "up";

  const imgSrc = scrollDir === "down" ? "/sf_logo_hor.png" : "/sf_logo_hor_white.png";

  return (
    <nav className="h-36 flex items-center justify-between max-w-container mx-auto px-container">
      <Link className="text-2xl font-bold" href="/">
        <Image src={imgSrc} alt="Soulfisher Designs Logo" width={300} height={96} />
      </Link>
      <ul className="items-center gap-6 hidden md:flex">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link
              className=" font-medium font-rubik hover:text-blue-500 duration-500 transition-all"
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="">
        <MobileMenu />
      </div>
    </nav>
  );
};
export default Navbar;
