"use client";
import { useRouter } from "next/navigation";
import ToggleButton from "./buttons/toggle-button";
import { useTheme } from "@/context/theme-context";
import UserDetails from "./user-details";
import { useAuth } from "@/context/auth-context";

export default function Header() {
  const router = useRouter();
  const { logout, isLoggedIn } = useAuth();
  const { isDarkMode } = useTheme();
  return (
    <header
      className={`flex ${isDarkMode ? "bg-black" : "bg-[#fffdf5]"} py-6 px-24 justify-between relative z-10 rounded-xl`}
    >
      {isLoggedIn ? (
        <>
          <button
            className="rounded p-2 border border-[#2c241626]/60 shadow-sm bg-[#fffdf5] z-1000"
            onClick={(e) => {
              e.preventDefault();
              logout();
              router.push("/login");
            }}
          >
            Logout
          </button>
          <UserDetails />
        </>
      ) : (
        <button
          className="rounded p-2 border border-[#2c241626]/60 shadow-sm bg-[#fffdf5] z-1000"
          onClick={(e) => {
            e.preventDefault();
            router.push("/login");
          }}
        >
          Login
        </button>
      )}

      <ToggleButton />
    </header>
  );
}
