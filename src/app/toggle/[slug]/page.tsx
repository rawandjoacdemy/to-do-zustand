"use client";

import { useParams } from "next/navigation";
import { useTaskStore } from "@/store/tasksStore";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function TogglePage() {
  const { slug } = useParams();
  const router = useRouter();

  const tasks = useTaskStore((state) => state.tasks);
  const toggleTask = useTaskStore((state) => state.toggleTask);

  const task = tasks.find((task) => task.id === slug);

  useEffect(() => {
    const token = Cookies.get("auth-token");

    if (!token) {
      router.push("/login");
    }
  }, [router]);
  if (!task) {
    return <div>Task not found</div>;
  }

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ fontFamily: "'Kalam'" }}
    >
      <div className="relative max-w-2xl my-40 mx-auto p-10 flex gap-10 items-center bg-[#fffdf5] rounded-xl">
        <h1 className="text-4xl">Task Status:</h1>
        <h1 className="text-2xl font-bold">{task.text}</h1>

        <input
          type="checkbox"
          checked={task.isDone}
          onChange={() => toggleTask(task.id)}
          className="peer hidden"
        />
        <div
          onClick={() => toggleTask(task.id)}
          className="flex-shrink-0 w-6 h-6 cursor-pointer"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M3 4 C3 3, 4 2, 5 2 L19 2.5 C20 2.5 21 3.5 21 4.5 L21.5 19 C21.5 20 20.5 22 19.5 22 L4.5 21.5 C3.5 21.5 2.5 20.5 2.5 19.5 Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
              className="text-amber-700/50 hover:text-amber-700 transition-colors"
            />

            {task.isDone && (
              <path
                d="M6 12 L10 16 L18 7"
                stroke="#c0392b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </div>
      </div>
    </div>
  );
}
