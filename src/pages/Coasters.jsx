import { useState } from "react";

import coasters from "../data/coasters.json";
import areas from "../data/areas.json";
import manufacturers from "../data/manufacturers.json";

import CoasterStats from "../components/CoasterStats";
import CoasterSearch from "../components/CoasterSearch";
import CoasterFilters from "../components/CoasterFilters";
import CoasterGrid from "../components/CoasterGrid";

export default function Coasters() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [material, setMaterial] = useState("all");

  const filtered = coasters.filter((coaster) => {
    const matchesSearch =
      coaster.currentName
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesStatus =
      status === "all" ||
      coaster.status === status;

    const matchesMaterial =
      material === "all" ||
      coaster.classification.material === material;

    return (
      matchesSearch &&
      matchesStatus &&
      matchesMaterial
    );
  });

  return (
    <div className="coasters-page">
      <h1>Coasters</h1>

      <CoasterStats coasters={coasters} />

      <CoasterSearch
        search={search}
        setSearch={setSearch}
      />

      <CoasterFilters
        status={status}
        setStatus={setStatus}
        material={material}
        setMaterial={setMaterial}
      />

      <CoasterGrid
        coasters={filtered}
        areas={areas}
        manufacturers={manufacturers}
      />
    </div>
  );
}