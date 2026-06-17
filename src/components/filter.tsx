interface Props {
  onFilter: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Filter({ onFilter }: Props) {
  return (
    <>
      <label>Filter by status</label>
      <select name="filter" onChange={onFilter}>
        <option value="All">All</option>
        <option value="ToDo">To Do</option>
        <option value="Done">Done</option>
      </select>
    </>
  );
}
