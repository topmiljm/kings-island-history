import areas from "../data/areas.json";

export default function CoasterFilters({
  status,
  setStatus,
  material,
  setMaterial,
  area,
  setArea
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

      <select
        value={area}
        onChange={(e) =>
          setArea(e.target.value)
        }
      >
        <option value="all">All Areas</option>
        {areas
          .filter((a) => a.status === "active")
          .map((a) => (
            <option key={a.id} value={a.id}>
              {a.name}
            </option>
          ))}
      </select>
    </div>
  );
}