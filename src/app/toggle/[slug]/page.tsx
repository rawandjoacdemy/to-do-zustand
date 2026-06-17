"use client";

import { useParams } from "next/navigation";
import { useTaskStore } from "@/store/tasksStore";

export default function TogglePage() {
  const { slug } = useParams();

  const tasks = useTaskStore((state) => state.tasks);
  const toggleTask = useTaskStore((state) => state.toggleTask);

  const taskId = Number(slug);

  const task = tasks.find((t) => t.id === taskId);

  if (!task) {
    return <div>Task not found</div>;
  }

  return (
    <div>
      <h1>{task.text}</h1>

      <label>
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={() => toggleTask(task.id)}
        />
        Done
      </label>
    </div>
  );
}