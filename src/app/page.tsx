"use client";
import SearchBar from "@/components/search-bar";
import { useRef, useState } from "react";

export default function Home() {
  const [tasksList, setTasksList] = useState([
    { id: Date.now(), text: "", isDone: false },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const inputRef = useRef("");

  function addTask(taskText: string) {
    const taskItem = {
      id: Date.now(),
      text: taskText,
      isDone: false,
    };

    setTasksList([...tasksList, taskItem]);
    inputRef.current.value = "";
  }

  function removeTask(id) {
    const taskItems = tasksList.filter((task) => task.id !== id);
    setTasksList(taskItems);
  }

  function handleCheckbox(id) {
    const tasks = tasksList.map((task) =>
      task.id === id ? { ...task, isDone: !task.isDone } : task,
    );
    setTasksList(tasks);
  }

  function handleSearch(e) {
    const query = e.target.value;
    setSearchQuery(query);
  }
  return (
    <>
      <h1>ToDo List</h1>

      <div>
        <input type="text" placeholder="search task" onChange={handleSearch} />
      </div>
      <h2>To Do</h2>
      <div>
        <input ref={inputRef} type="text" placeholder="task name" value={searchQuery}/>
        <button onClick={() => addTask(inputRef.current.value)}>add</button>
      </div>
      <div>
        <ul>
          {tasksList
            .filter((task) => !task.isDone)
            .map((task, idx) => {
              return (
                <li key={idx}>
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
          {tasksList
            .filter((task) => task.isDone)
            .map((task, idx) => {
              return (
                <li key={idx}>
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

function Search(list: string[], query) {
  const searchResult = list.filter((item) => {
    item.includes(query);
  });
  return searchResult;
}
