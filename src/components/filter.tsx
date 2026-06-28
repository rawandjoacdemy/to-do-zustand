interface Props {
  onFilter: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Filter({ onFilter }: Props) {
  return (
    <div className="flex gap-4 my-4">
      <label>Filter by status</label>
      <select name="filter" onChange={onFilter}>
        {["All", "ToDo", "Done"].map((option, idx) => (
          <option key={idx} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
