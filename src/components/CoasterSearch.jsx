export default function CoasterSearch({
  search,
  setSearch
}) {
  return (
    <input
      className="coaster-search"
      type="text"
      maxLength={50}
      placeholder="Search coasters..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
    />
  );
}