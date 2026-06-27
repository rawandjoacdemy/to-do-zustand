import { useTheme } from "@/context/theme-context";

export default function ToggleButton() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="rounded p-2 border border-[#2c241626]/60 shadow-sm bg-[#fffdf5]">
      {/* <SunDoodle/> */}
      <button onClick={() => toggleTheme()}> {isDarkMode ? "🌙" : "☀️"}</button>
      {/* <MoonDoodle/> */}
    </div>
  );
}
