"use client";

import { DoodleCircle, DoodleFlower, DoodleHeart, DoodleStar } from "./doodles";
import { useTheme } from "@/context/theme-context";

export default function Background() {
  const { isDarkMode } = useTheme();

  return (
    <>
      <div
        className={`fixed inset-0 -z-10 ${
          isDarkMode ? "bg-black" : "bg-[#FFFCF4]"
        }`}
        style={{
          backgroundImage: isDarkMode
            ? "repeating-linear-gradient(transparent, transparent 31px, #ffffff0f 31px, rgba(159,159,159,0.16) 32px)"
            : "repeating-linear-gradient(transparent, transparent 31px, #e2e1df12 31px, rgba(44,36,22,0.07) 32px)",
          backgroundSize: "100% 32px",
        }}
      />
      {/* vertical red line  */}
      <div className="absolute top-0 bottom-0 left-16 md:left-24 w-px bg-red-300/50 " />

      {/* background doodles */}
      <DoodleFlower className="absolute top-6 right-8 w-14 h-14 text-amber-400/50 z-0" />
      <DoodleStar className="absolute top-20 right-24 w-8 h-8 text-red-400/40 z-0" />
      <DoodleHeart className="absolute bottom-16 right-12 w-10 h-10 text-pink-400/40 z-0" />
      <DoodleCircle className="absolute bottom-32 left-4 w-14 h-14 text-amber-500/30 z-0" />
      <DoodleStar className="absolute top-1/2 right-6 w-6 h-6 text-amber-600/30 z-0" />
    </>
  );
}
