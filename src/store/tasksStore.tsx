import { randomUUID } from "crypto";
import { create } from "zustand";

interface Task {
  id: string;
  text: string;
  isDone: boolean;
}

type TaskStore = {
  tasks: Task[];

  addTask: (text: string) => void;
  removeTask: (id: string) => void;
  toggleTask: (id: string) => void;
};

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  addTask: (text) =>
    set((state) => ({
      tasks: [...state.tasks, { id: crypto.randomUUID(), text, isDone: false }],
    })),

  removeTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),

  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task,
      ),
    })),
}));
