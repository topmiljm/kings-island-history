export default function CoasterSearch({
  search,
  setSearch
}) {
  return (
    <input
      className="coaster-search"
      type="text"
      placeholder="Search coasters..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
    />
  );
}