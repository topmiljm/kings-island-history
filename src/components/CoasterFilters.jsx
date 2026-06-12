export default function CoasterFilters({
  status,
  setStatus,
  material,
  setMaterial
}) {
  return (
    <div className="filters">
      <select
        value={status}
        onChange={(e) =>
          setStatus(e.target.value)
        }
      >
        <option value="all">All</option>
        <option value="operating">
          Operating
        </option>
        <option value="defunct">
          Defunct
        </option>
      </select>

      <select
        value={material}
        onChange={(e) =>
          setMaterial(e.target.value)
        }
      >
        <option value="all">All Materials</option>
        <option value="wood">Wood</option>
        <option value="steel">Steel</option>
      </select>
    </div>
  );
}