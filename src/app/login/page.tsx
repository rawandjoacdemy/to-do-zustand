export default function Login() {
  return (
    <div
      className="min-h-screen bg-[#faf6ee] relative overflow-hidden"
      style={{ fontFamily: "'Kalam'" }}
    >
      {/* background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(transparent, transparent 31px, #2c241612 31px, rgba(44,36,22,0.07) 32px)",
          backgroundSize: "100% 32px",
        }}
      />
      <div className="absolute top-0 bottom-0 left-16 md:left-24 w-px bg-red-300/50 " />

      <div className="relative max-w-2xl my-40 mx-auto p-10 flex gap-10 flex-col items-center bg-[#fffdf5] rounded-xl">
        <div className="text-[32px]">Login</div>
        <form className="flex flex-col gap-10">
          <div className="flex gap-4">
            <label htmlFor="username">User Name</label>
            <input type="text" placeholder="username" name="username" className="p-2"/>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="password" name="password" className="p-2" />
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
