"use client";
import Filter from "@/components/filter";
import SearchBar from "@/components/search-bar";
import { searchTasks } from "@/utils/helpers";
import { useRef, useState } from "react";

interface Task {
  id: number;
  text: string;
  isDone: boolean;
}

export default function Home() {
  const [tasksList, setTasksList] = useState<Task[]>([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [tasksCounter, setTasksCounter] = useState(0);
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

  function handleSearch(query: string) {
    setSearchQuery(query);
  }

  function handleFilter(e: React.ChangeEvent<HTMLSelectElement>) {
    setFilterStatus(e.target.value);
  }

  function handleCheckbox(id: number) {
    const tasks = tasksList.map((task) =>
      task.id === id ? { ...task, isDone: !task.isDone } : task,
    );
    setTasksList(tasks);
  }

  function addTask(taskText: string) {
    const taskItem = {
      id: Date.now(),
      text: taskText,
      isDone: false,
    };
    setTasksList([...tasksList, taskItem]);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setTasksCounter(tasksCounter + 1);
  }

  function removeTask(id: number) {
    const taskItems = tasksList.filter((task) => task.id !== id);
    setTasksList(taskItems);
    setTasksCounter(tasksCounter - 1);
  }

  return (
    <>
      <h1>ToDo List</h1>

      <div>Tasks Counter: {tasksCounter}</div>
      <div>
        <Filter onFilter={handleFilter} />
      </div>
      <div>
        <SearchBar value={searchQuery} onSearch={handleSearch} />
      </div>

      <h2>To Do</h2>
      <div>
        <input ref={inputRef} type="text" placeholder="task name" />
        <button onClick={() => addTask(inputRef.current!.value)}>add</button>
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
                      handleCheckbox(task.id);
                    }}
                  />{" "}
                  {task.text}
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
                      handleCheckbox(task.id);
                    }}
                    checked={task.isDone}
                  />{" "}
                  {task.text}{" "}
                  <button onClick={() => removeTask(task.id)}>delete</button>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}
