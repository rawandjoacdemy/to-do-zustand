"use client";
import Filter from "@/components/filter";
import SearchBar from "@/components/search-bar";
import { useTaskStore } from "@/store/tasksStore";
import { searchTasks } from "@/utils/helpers";
import Link from "next/link";
import { useRef, useState } from "react";

interface Task {
  id: number;
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
  const [darkMode, setDarkMode] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const filteredTasks = searchTasks(tasksList, searchQuery);
  const todoTasks = filteredTasks.filter((task: Task) => !task.isDone);
  const doneTasks = filteredTasks.filter((task: Task) => task.isDone);
  const filteredTodo = todoTasks.filter((task: Task) =>
    task.text.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  const filteredDone = doneTasks.filter((task: Task) =>
    task.text.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  function handleAdd() {
    if (!inputRef.current) return;

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
    <>
      <h1>ToDo List</h1>

      <div>Tasks Counter: {tasksList.length}</div>
      <div>
        <Filter onFilter={handleFilter} />
      </div>
      <div>
        <SearchBar value={searchQuery} onSearch={handleSearch} />
      </div>

      <h2>To Do</h2>
      <div>
        <input ref={inputRef} type="text" placeholder="task name" />
        <button onClick={() => handleAdd()}>add</button>
      </div>
      <div>
        <ul>
          {(filterStatus == "All" || filterStatus == "ToDo") &&
            filteredTodo.map((task: Task) => {
              return (
                <li key={task.id}>
                  <input
                    type="checkbox"
                    onChange={() => {
                      toggleTask(task.id);
                    }}
                  />{" "}
                  <Link href={`/toggle/${task.id}`}>{task.text}</Link>
                  <button onClick={() => removeTask(task.id)}>delete</button>
                </li>
              );
            })}
        </ul>
      </div>

      <h2>Done</h2>
      <div>
        <ul>
          {" "}
          {(filterStatus == "All" || filterStatus == "Done") &&
            filteredDone.map((task: Task) => {
              return (
                <li key={task.id}>
                  <input
                    type="checkbox"
                    onChange={() => {
                      toggleTask(task.id);
                    }}
                    checked={task.isDone}
                  />{" "}
                  <Link href={`/toggle/${task.id}`}>{task.text}</Link>
                  <button onClick={() => removeTask(task.id)}>delete</button>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}
