import { NavLink, Link, Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <header className="site-header">
        <div className="header-link">
          <Link to="/">
            <img src="/favicon.png"></img>
          </Link>
        </div>
        <h1>Kings Island Coaster History</h1>


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