import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1>Kings Island Coaster History</h1>

      <div className="menu-grid">
        <Link to="/timeline">Timeline</Link>
        <Link to="/decades">Decades</Link>
        <Link to="/records">Records</Link>
      </div>
    </div>
  );
}