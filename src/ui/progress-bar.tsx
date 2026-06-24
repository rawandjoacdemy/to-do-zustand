import { ThemeContext } from "@/app/page";
import { useContext } from "react";

export default function ProgressBar({ tasksList, doneTasks }) {
  const total = tasksList.length;
  const done = doneTasks.length;
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);
  const { isDarkMode } = useContext(ThemeContext);
 
  return (
    <div
      className={`mb-8 ${isDarkMode ? "bg-black" : " bg-[#faf6ee]"} rounded-2xl p-5 border border-[#2c241626]/60 shadow-sm overflow-hidden`}
    >
      <div className="flex items-end justify-between mb-3">
        <span
          className={`${isDarkMode ? "text-white" : "text-[#2c2416]"} text-xl font-[700]`}
          style={{ fontFamily: "'Caveat'" }}
        >
          Progress
        </span>
        <span
          className="text-3xl text-[#c0392b] font-[700]"
          style={{ fontFamily: "'Caveat'" }}
        >
          {pct}%
        </span>
      </div>
      {/* Progress bar */}
      <div className="relative h-5">
        <div className="absolute inset-0 rounded-full border border-[#2c241626]" />
        {/* Fill */}
        <div
          className="absolute top-0.5 left-0.5 bottom-0.5 bg-[#C1392A] transition-all duration-500 rounded-xl"
          style={{
            width: `calc(${pct}% - 4px)`,
          }}
        />
      </div>
      <p
        className={`mt-2 ${isDarkMode ? "text-white" : " text-[#7a6d5a]"}`}
        style={{ fontFamily: "'Patrick Hand'" }}
      >
        {done} of {total} tasks checked off ✓
      </p>
    </div>
  );
}
