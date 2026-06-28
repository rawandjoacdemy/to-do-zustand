import Image from "next/image";
import { useTheme } from "@/context/theme-context";
import { useAuth } from "@/context/auth-context";

export default function UserDetails() {
  const { isDarkMode } = useTheme();
  const { username } = useAuth();

  return (
    <div className="flex gap-8">
      <Image
        src="/pictures/profile-pic.png"
        alt="user avatar"
        width={40}
        height={30}
      />
      <p className={isDarkMode ? "text-white" : ""}>{username}</p>
    </div>
  );
}
