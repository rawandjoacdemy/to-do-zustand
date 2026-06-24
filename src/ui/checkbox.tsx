import { useTaskStore } from "@/store/tasksStore";

export default function Checkbox({task}) {
  const toggleTask = useTaskStore((state) => state.toggleTask);
  return (
    <div
      onClick={() => toggleTask(task.id)}
      className="flex-shrink-0 w-6 h-6 cursor-pointer"
      aria-label={task.isDone ? "Mark incomplete" : "Mark complete"}
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
          className="text-amber-700/50 hover:text-amber-700"
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
  );
}
