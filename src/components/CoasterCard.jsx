import { Link } from "react-router-dom";

export default function CoasterCard({ coaster, area, manufacturer }) {
  return (
    <div className="coaster-card">
      <h2>{coaster.currentName}</h2>

      <div className="coaster-meta">
        {coaster.status} • {area?.name}
      </div>

      <div className="coaster-meta">
        {coaster.classification.material} • {coaster.opened}
      </div>

      <div className="coaster-meta">
        {manufacturer?.name}
      </div>

      <Link
        className="details-link"
        to={`/coasters/${coaster.slug}`}
      >
        View Details
      </Link>
    </div>
  );
}