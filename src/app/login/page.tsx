"use client";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { login } = useAuth();

  const dummy_data = [
    {
      username: "Rama",
      password: "123456",
    },
    {
      username: "Rawand",
      password: "123456",
    },
  ];

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();

    if (!username || !password) return;

    const user = dummy_data.find(
      (user) => user.username === username && user.password === password,
    );
    if (!user) {
      alert("invalid credintials");
    } else {
      login(user?.username, "auth-token");
      router.push("/");
    }
  }
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ fontFamily: "'Kalam'" }}
    >
      <div className="relative max-w-2xl my-40 mx-auto p-10 flex gap-10 flex-col items-center bg-[#fffdf5] shadow-lg rounded-xl">
        <div className="text-[32px]">Login</div>
        <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <label htmlFor="username">
              User Name
              <input
                type="text"
                placeholder="username"
                name="username"
                className="p-2 ml-2"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label htmlFor="password">
              Password
              <input
                type="password"
                placeholder="password"
                name="password"
                value={password}
                className="p-2 ml-2"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>

          <button
            type="submit"
            className="rounded py-3 px-12 border border-[#2c241626]/60 shadow-sm bg-[#fffdf5] m-auto"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
