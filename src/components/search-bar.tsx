interface Props {
  value: string;
  onSearch: (e: string) => void;
}

export default function SearchBar({ value, onSearch }: Props) {
  return (
    <>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="search task"
        />
      </div>
    </>
  );
}
