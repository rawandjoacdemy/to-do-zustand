"use client";
import Filter from "@/components/filter";
import SearchBar from "@/components/search-bar";
import { useTaskStore } from "@/store/tasksStore";
import Background from "@/ui/backgound";
import Checkbox from "@/ui/checkbox";
import { DoodleFlower, DoodleHeart, DoodleStar } from "@/ui/doodles";
import Header from "@/ui/header";
import ProgressBar from "@/ui/progress-bar";
import Link from "next/link";
import { createContext, useRef, useState } from "react";

export const ThemeContext = createContext({});

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
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const inputRef = useRef<HTMLInputElement | null>(null);

  const { todoTasks, doneTasks } = tasksList.reduce(
    (acc, task: Task) => {
      if (!task.text.toLowerCase().includes(searchQuery.toLowerCase())) {
        return acc;
      }

      task.isDone ? acc.doneTasks.push(task) : acc.todoTasks.push(task);

      return acc;
    },
    {
      todoTasks: [] as Task[],
      doneTasks: [] as Task[],
    },
  );

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
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div
        className={`min-h-screen relative ${isDarkMode ? "bg-black text-white" : " bg-[#faf6ee]"} `}
        style={{ fontFamily: "'Kalam'" }}
      >
        <Header />
        {/* background */}
        <Background />
        <div className="relative z-10 max-w-2xl my-10 mx-auto pl-20 md:pl-28 py-10 my-10">
          <h1
            className="text-5xl leading-tight font-[700]"
            style={{ fontFamily: "'Caveat'" }}
          >
            To do list
          </h1>

          <DoodleFlower className="absolute top-6 right-8 w-14 h-14 text-amber-400/50 " />
          <DoodleHeart className="absolute bottom-6 left-8 w-14 h-14 text-amber-400/50" />
          <DoodleStar className="absolute top-1/2 right-6 w-6 h-6 text-red-400/40" />

          <ProgressBar tasksList={tasksList} doneTasks={doneTasks} />

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
                      <Checkbox task={task} />

                      <div
                        className={`px-4 ${isDarkMode ? "" : "bg-[#fffdf5]"} border border-[#2c241626]/60 shadow-sm py-2 border m-2 w-3/4 inline-block rounded-2xl ${
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
                  <DoodleFlower className=" w-14 h-14 text-amber-400/50 m-auto" />
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
                      <Checkbox task={task} />

                      <div
                        className={`px-4 ${isDarkMode ? "" : "bg-[#fffdf5]"} border border-[#2c241626]/60 shadow-sm py-2 border m-2 w-3/4 inline-block rounded-2xl ${
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
                  <DoodleFlower className=" w-14 h-14 text-amber-400/50 m-auto" />
                  <div className="text-[#c1392a8b] w-full text-center">
                    Not done yet!
                  </div>
                </div>
              )}
            </div>
          )}

          {/* task input  */}
          <label>Add New Task</label>
          <form
            className="flex gap-4 mt-4 border  rounded-xl"
            onSubmit={(event) => {
              event.preventDefault();
              handleAdd();
            }}
          >
            <input
              ref={inputRef}
              type="text"
              placeholder="task name"
              className="w-3/4 p-4 rounded-xl"
            />
            <button type="submit" className="ml-4">
              Add Task
            </button>
          </form>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
