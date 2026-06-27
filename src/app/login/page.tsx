"use client";
import Cookies from "js-cookie";
import { useState } from "react";
export default function Login() {
  const [username, setUsername] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    Cookies.set("username", username);
    console.log(username);
  }
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ fontFamily: "'Kalam'" }}
    >
      <div className="relative max-w-2xl my-40 mx-auto p-10 flex gap-10 flex-col items-center bg-[#fffdf5] rounded-xl">
        <div className="text-[32px]">Login</div>
        <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              placeholder="username"
              name="username"
              className="p-2"
              onChange={(e) => setUsername(e.target.value)}
            />
            {console.log(username)}
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="p-2"
            />
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
