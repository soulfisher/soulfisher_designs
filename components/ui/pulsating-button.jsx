"use client";
import React from "react";

import { cn } from "@/lib/utils";

export default function PulsatingButton({
  className,
  children,
  pulseColor = "#0096ff",
  duration = "2s",
  ...props
}) {
  return (
    <button
      className={cn(
        "relative h-12  px-8 sm:w-fit md:h-[50px] text-center cursor-pointer flex justify-center items-center rounded-lg text-white dark:text-black bg-blue-500 dark:bg-blue-500 py-2",
        className
      )}
      style={{
        "--pulse-color": pulseColor,
        "--duration": duration,
      }}
      {...props}
    >
      <span className="relative z-10 block">{children}</span>
      <span className="absolute block top-1/2 left-1/2 size-full rounded-lg bg-inherit animate-pulse -translate-x-1/2 -translate-y-1/2" />
    </button>
  );
}
