import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header className="site-header">
        <Link to="/">
          <h1>Kings Island History</h1>
        </Link>

        <nav>
          <Link to="/coasters">Coasters</Link>
          <Link to="/timeline">Timeline</Link>
          <Link to="/decades">Decades</Link>
          <Link to="/records">Records</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}