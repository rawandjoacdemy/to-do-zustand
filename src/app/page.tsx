"use client";
import Filter from "@/components/filter";
import SearchBar from "@/components/search-bar";
import { useTaskStore } from "@/store/tasksStore";
import {
  DoodleCircle,
  DoodleFlower,
  DoodleHeart,
  DoodleStar,
} from "@/ui/doodles";
import Link from "next/link";
import { useRef, useState } from "react";

interface Task {
  id: string;
  text: string;
  isDone: boolean;
}

export default function Home() {
  const tasksList = useTaskStore((state) => state.tasks);
  const addTask = useTaskStore((state) => state.addTask);
  const removeTask = useTaskStore((state) => state.removeTask);
  const toggleTask = useTaskStore((state) => state.toggleTask);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const inputRef = useRef<HTMLInputElement | null>(null);

  const { todoTasks, doneTasks } = tasksList.reduce(
    (acc, task: Task) => {
      if (!task.text.toLowerCase().includes(searchQuery.toLowerCase())) {
        return acc;
      }

      if (task.isDone) {
        acc.doneTasks.push(task);
      } else {
        acc.todoTasks.push(task);
      }

      return acc;
    },
    {
      todoTasks: [] as Task[],
      doneTasks: [] as Task[],
    },
  );

  const total = tasksList.length;
  const done = doneTasks.length;
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);

  function handleAdd() {
    if (!inputRef.current || inputRef.current.value === "") return;

    addTask(inputRef.current.value);
    inputRef.current.value = "";
  }

  function handleSearch(query: string) {
    setSearchQuery(query);
  }

  function handleFilter(e: React.ChangeEvent<HTMLSelectElement>) {
    setFilterStatus(e.target.value);
  }

  return (
    <div
      className="min-h-screen bg-[#faf6ee] relative overflow-hidden"
      style={{ fontFamily: "'Kalam'" }}
    >
      {/* background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(transparent, transparent 31px, #2c241612 31px, rgba(44,36,22,0.07) 32px)",
          backgroundSize: "100% 32px",
        }}
      />
      <div className="absolute top-0 bottom-0 left-16 md:left-24 w-px bg-red-300/50 " />

      {/* background doodles */}
      <DoodleFlower className="absolute top-6 right-8 w-14 h-14 text-amber-400/50 pointer-events-none" />
      <DoodleStar className="absolute top-20 right-24 w-8 h-8 text-red-400/40 pointer-events-none" />
      <DoodleHeart className="absolute bottom-16 right-12 w-10 h-10 text-pink-400/40 pointer-events-none" />
      <DoodleCircle className="absolute bottom-32 left-4 w-14 h-14 text-amber-500/30 pointer-events-none" />
      <DoodleStar className="absolute top-1/2 right-6 w-6 h-6 text-amber-600/30 pointer-events-none" />

      <div className="relative z-10 max-w-2xl my-10 mx-auto px-6 pl-20 md:pl-28 py-10 my-10">
        <h1
          className="text-5xl leading-tight font-[700]"
          style={{ fontFamily: "'Caveat'" }}
        >
          To do list
        </h1>

        <DoodleFlower className="absolute top-6 right-8 w-14 h-14 text-amber-400/50 pointer-events-none" />
        <DoodleHeart className="absolute bottom-6 left-8 w-14 h-14 text-amber-400/50 pointer-events-none" />
        <DoodleStar className="absolute top-1/2 right-6 w-6 h-6 text-red-400/40 pointer-events-none" />

        <div className="mb-8 bg-[#fffdf5] rounded-2xl p-5 border border-[#2c241626]/60 shadow-sm relative overflow-hidden">
          <div className="flex items-end justify-between mb-3">
            <span className="text-[#2c2416] text-xl  font-[var(--font-caveat)] font-[700]">
              Progress
            </span>
            <span className="text-3xl text-primary font-[var(--font-caveat)] font-[700]">
              {pct}%
            </span>
          </div>
          {/* Progress bar */}
          <div className="relative h-5">
            <div className="absolute inset-0 rounded-full border border-[#2c241626]" />
            {/* Fill */}
            <div
              className="absolute top-0.5 left-0.5 bottom-0.5 bg-[#C1392A] transition-all duration-500"
              style={{
                width: `calc(${pct}% - 4px)`,
                borderRadius: "9999px",
              }}
            />
          </div>
          <p
            className="mt-2 text-[#7a6d5a]"
            style={{ fontFamily: "'Patrick Hand'" }}
          >
            {done} of {total} tasks checked off ✓
          </p>
        </div>
        {/* search  */}
        <div className="flex flex-col gap-2">
          <label>Search for the task you're looking for:</label>
          <SearchBar value={searchQuery} onSearch={handleSearch} />
        </div>
        {/* filter */}
        <div>
          <Filter onFilter={handleFilter} />
        </div>
        {/* to do tasks  */}
        {(filterStatus == "All" || filterStatus == "ToDo") && (
          <div>
            <h2 className="mb-4">To Do</h2>
            <ul>
              {todoTasks.map((task: Task) => {
                return (
                  <li
                    key={task.id}
                    className="mt-4 pl-4 rounded-lg flex items-center"
                  >
                    <input
                      type="checkbox"
                      checked={task.isDone}
                      onChange={() => toggleTask(task.id)}
                      className="peer hidden"
                    />

                    <div
                      onClick={() => toggleTask(task.id)}
                      className="relative flex-shrink-0 w-6 h-6 cursor-pointer"
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

                    <div
                      className={`px-4 py-1 border m-2 w-3/4 inline-block rounded-lg ${
                        task.isDone ? "line-through text-gray-500" : ""
                      }`}
                    >
                      <Link href={`/toggle/${task.id}`}>{task.text}</Link>
                    </div>

                    <button
                      onClick={() => removeTask(task.id)}
                      className="text-[#C1392A]"
                    >
                      X
                    </button>
                  </li>
                );
              })}
            </ul>
            {tasksList.length === 0 && (
              <div>
                <DoodleFlower className=" w-14 h-14 text-amber-400/50 pointer-events-none m-auto" />
                <div className="text-[#c1392a8b] w-full text-center">
                  No tasks yet!
                </div>
              </div>
            )}
          </div>
        )}

        {/* done tasks  */}
        {(filterStatus == "All" || filterStatus == "Done") && (
          <div>
            <h2 className="my-4">Done</h2>
            <ul>
              {" "}
              {doneTasks.map((task: Task) => {
                return (
                  <li
                    key={task.id}
                    className="mt-4 pl-4 rounded-lg flex items-center"
                  >
                    <input
                      type="checkbox"
                      checked={task.isDone}
                      onChange={() => toggleTask(task.id)}
                      className="peer hidden"
                    />

                    <div
                      onClick={() => toggleTask(task.id)}
                      className="relative flex-shrink-0 w-6 h-6 cursor-pointer"
                      aria-label={
                        task.isDone ? "Mark incomplete" : "Mark complete"
                      }
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

                    <div
                      className={`px-4 py-1 border m-2 w-3/4 inline-block rounded-lg ${
                        task.isDone ? "line-through text-gray-500" : ""
                      }`}
                    >
                      <Link href={`/toggle/${task.id}`}>{task.text}</Link>
                    </div>

                    <button
                      onClick={() => removeTask(task.id)}
                      className="text-[#C1392A]"
                    >
                      X
                    </button>
                  </li>
                );
              })}
            </ul>
            {/* no tasks  */}
            {doneTasks.length === 0 && (
              <div className="mb-8">
                <DoodleFlower className=" w-14 h-14 text-amber-400/50 pointer-events-none m-auto" />
                <div className="text-[#c1392a8b] w-full text-center">
                  Not done yet!
                </div>
              </div>
            )}
          </div>
        )}

        {/* task input  */}
        <label>Add New Task</label>
        <div className="flex gap-4 mt-4 border  rounded-xl">
          <input
            ref={inputRef}
            type="text"
            placeholder="task name"
            className="w-3/4 p-4 rounded-xl"
          />
          <button onClick={() => handleAdd()} className="ml-4">
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}
