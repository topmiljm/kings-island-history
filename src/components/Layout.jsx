import { NavLink, Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header className="site-header">
        <Link to="/">
          <h1>Kings Island Coaster History</h1>
        </Link>

        <nav>
          <NavLink to="/coasters" className={({ isActive }) => isActive ? "active" : ""}>
            Coasters</NavLink>
          <NavLink to="/timeline">Timeline</NavLink>
          <NavLink to="/decades">Decades</NavLink>
          <NavLink to="/records">Records</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}