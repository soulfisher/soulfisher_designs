"use client";
import { Disclosure, DisclosureButton } from "@headlessui/react";
import { FaPlus, FaMinus } from "react-icons/fa6";

import { twMerge } from "tailwind-merge";
const FAQContainer = () => {
  return (
    <div className="flex flex-col gap-2">
      <Collapsible
        defaultOpen={true}
        question="Which technical skills would you improve?"
        answer="Your applicant may have limited help desk wexperience. In that case, look for applicants who are motivated to grow and have some transferable nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit moles accumsan  "
      />
      <Collapsible
        question="What do Logical Drives do?"
        answer="Your applicant may have limited help desk wexperience. In that case, look for applicants who are motivated to grow and have some transferable nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit moles accumsan  "
      />
      <Collapsible
        question="What about our safety measures? "
        answer="Your applicant may have limited help desk wexperience. In that case, look for applicants who are motivated to grow and have some transferable nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit moles accumsan  "
      />
      <Collapsible
        question="Can I success on this platform experience?"
        answer="Your applicant may have limited help desk wexperience. In that case, look for applicants who are motivated to grow and have some transferable nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit moles accumsan  "
      />
    </div>
  );
};
export default FAQContainer;

export const Collapsible = ({ question, answer, defaultOpen = false }) => {
  return (
    <Disclosure
      as="div"
      className="px-7 py-5 rounded-[10px] border border-[#e7e9e8] bg-white"
      defaultOpen={defaultOpen}
    >
      {({ open }) => (
        <>
          <DisclosureButton className="group gap-4 text-black text-lg font-medium flex w-full items-center text-start justify-between">
            <span
              className={twMerge(
                "text-lg sm:text-xl font-bold ",
                open ? "text-blue-500" : "text-black"
              )}
            >
              {question}
            </span>

            <span className="size-[34px] border border-[#e7e9e8] shrink-0 rounded-full text-slate-gray grid place-content-center text-sm">
              {open ? (
                <span className="size-[34px] border  shrink-0 rounded-full bg-blue-500 border-blue-500 text-white grid place-content-center text-sm">
                  <FaMinus />
                </span>
              ) : (
                <span className="size-[34px] border border-[#e7e9e8] shrink-0 rounded-full text-slate-gray grid place-content-center text-sm">
                  <FaPlus />
                </span>
              )}
            </span>
          </DisclosureButton>
          <div
            className={twMerge(
              "overflow-hidden transition-all duration-500",
              open ? "h-auto" : "h-0"
            )}
          >
            <div className="pt-5 text-dim-gray leading-loose ">{answer}</div>
          </div>
        </>
      )}
    </Disclosure>
  );
};
