import { ThemeContext } from "@/app/page";
import { useContext } from "react";

export default function ToggleButton() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="rounded p-2 border border-[#2c241626]/60 shadow-sm bg-[#fffdf5]">
      {/* <SunDoodle/> */}
      <button onClick={() => toggleTheme()}> {isDarkMode ? "🌙" : "☀️"}</button>

      {/* <MoonDoodle/> */}
    </div>
  );
}
