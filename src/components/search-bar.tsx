interface Props {
  value: string;
  onSearch: (e: string) => void;
}

export default function SearchBar({ value, onSearch }: Props) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onSearch(e.target.value)}
      placeholder="search task"
      className="border rounded-lg px-4 py-1 mb-4"
    />
  );
}
