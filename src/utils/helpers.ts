interface Task {
  id: number;
  text: string;
  isDone: boolean;
}

export function searchTasks(tasks: Task[], query: string) {
  return tasks.filter((task) =>
    task.text.toLowerCase().includes(query.toLowerCase()),
  );
}
