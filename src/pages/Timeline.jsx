import { Link } from "react-router-dom";
import coasters from "../data/coasters.json";

export default function Timeline() {
  const sorted = [...coasters].sort(
    (a, b) => a.opened - b.opened
  );

  return (
    <div>
      <h1>Timeline</h1>

      {sorted.map((coaster) => (
        <div key={coaster.slug}>
          {coaster.opened} - {" "}
          <Link to={`/coaster/${coaster.slug}`}>
            {coaster.name}
          </Link>
        </div>
      ))}
    </div>
  );
}