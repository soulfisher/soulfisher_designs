"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { RemoveScroll } from "react-remove-scroll";
import FocusLock from "react-focus-lock";

import { IoClose } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";

import { navLinks } from "./Navbar";
import SocialLinks from "./SocialLinks";
const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const openMenu = () => setOpen(true);
  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, [closeMenu]);

  return (
    <>
      <button className=" h-fit" onClick={openMenu}>
        <LuMenu className="text-3xl " />
      </button>
      {open &&
        createPortal(
          <>
            <RemoveScroll>
              <FocusLock returnFocus={true}>
                <div className="fixed  z-50 inset-0 p-4">
                  <div
                    onClick={closeMenu}
                    className="backdrop absolute inset-0 z-40  bg-opacity-50 backdrop-blur-[3px]"
                  />
                  <div className="drawer  bg-navy-blue  absolute top-0 bottom-0 w-full max-w-md text-white  z-50  flex flex-col right-0  ">
                    <header className="pl-4 pr-8 pt-4  pb-8   flex justify-between items-center relative z-20">
                      <Link
                        className="text-2xl font-bold"
                        onClick={closeMenu}
                        href="/"
                      >
                        Soulfisher Designs
                      </Link>
                      <button onClick={closeMenu}>
                        <IoClose className="text-3xl mb-2" />
                      </button>
                    </header>
                    <div className="flex-1 pt-1 px-7 overflow-auto relative z-20">
                      <ul className="flex flex-col text-base font-medium  gap-6 ">
                        {navLinks.map((link, index) => (
                          <li key={index}>
                            <Link
                              onClick={closeMenu}
                              className="hover:text-purple focus-visible:text-purple transition-all"
                              href={link.href}
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <footer className="pt-2 pb-7 px-7 flex items-center justify-between gap-4 relative z-20">
                      <SocialLinks />
                    </footer>
                  </div>
                </div>
              </FocusLock>
            </RemoveScroll>
          </>,
          document.body
        )}
    </>
  );
};
export default MobileMenu;
