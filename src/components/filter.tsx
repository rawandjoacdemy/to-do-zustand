interface Props {
  onFilter: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Filter({ onFilter }: Props) {
  return (
    <div className="flex gap-4 my-4">
      <label >Filter by status</label>
      <select name="filter" onChange={onFilter}>
        <option value="All">All</option>
        <option value="ToDo">To Do</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
}
