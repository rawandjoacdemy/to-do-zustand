function Search(list: string[], query) {
  const searchResult = list.filter((item) => {
    item.includes(query);
  });
  return searchResult;
}


export default function SearchBar(query, onSearch) {

  return (
    <>
      <div>
        <input type="text" placeholder="search task" onChange={handleSearch}/>
      </div>
    </>
  );
}
