import Image from "next/image";
import Cookies from "js-cookie";
import { useTheme } from "@/context/theme-context";
export default function UserDetails() {
  const username = Cookies.get("username");
  const { isDarkMode } = useTheme();
  return (
    <div className="flex gap-8">
      <Image
        src="/pictures/profile-pic.png"
        alt="user avatar"
        width={50}
        height={50}
      />
      <p className={`${isDarkMode ? "text-white" : ""}`}>{username}</p>
    </div>
  );
}
