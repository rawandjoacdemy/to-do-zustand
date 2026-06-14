"use client";
import { useRef, useState } from "react";

export default function Home() {
  const [tasksList, setTasksList] = useState([
    { text: "", id: Date.now(), isDone: false },
  ]);
  const inputRef = useRef("");
  function addTask(task: string) {
    const taskItem = {
      id: Date.now(),
      text: task,
      isDone: false,
    };

    setTasksList([...tasksList, taskItem]);
  }

  function removeTask(id) {
    const taskItems = tasksList.filter((task) => task.id !== id);
    setTasksList(taskItems);
  }

  function handleCheckbox(task) {
    task.isDone = true;
  }

  return (
    <>
      <h1>ToDo List</h1>

      <h2>To Do</h2>
      <div>
        <input ref={inputRef} type="text" placeholder="task name" />
        <button onClick={() => addTask(inputRef.current.value)}>add</button>
      </div>
      {console.log(inputRef.current.value)}
      <div>
        <ul>
          {tasksList.map((task, idx) => {
            return (
              <li key={idx}>
                <input
                  type="checkbox"
                  onChange={handleCheckbox}
                  checked={isChecked}
                />{" "}
                {task.text}{" "}
                <button onClick={() => removeTask(task.id)}>delete</button>
              </li>
            );
          })}
        </ul>
      </div>

      <h2>Done</h2>
      <div>
        <ul>donelist.map</ul>
      </div>
    </>
  );
}
