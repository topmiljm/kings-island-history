import { NavLink, Link, Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import ThemeToggle from "./ThemeToggle";
import useTheme from "../hooks/useTheme";

export default function Layout() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <ScrollToTop />
      <header className="site-header">
        <div className="header-link">
          <Link to="/" title="Home Page">
            <img src="/favicon.png" />
          </Link>
        </div>
        <h1>Kings Island Coaster History</h1>

        <nav>
          <NavLink to="/coasters" title="Browse Kings Island's Roller Coasters" className={({ isActive }) => isActive ? "active" : ""}>Coasters</NavLink>
          <NavLink to="/timeline" title="Selected Kings Island Timeline" className={({ isActive }) => isActive ? "active" : ""}>Timeline</NavLink>
          <NavLink to="/decades" title="Roller Coaster Additions by Decade" className={({ isActive }) => isActive ? "active" : ""}>Decades</NavLink>
          <NavLink to="/records" title="Kings Island Roller Coaster Records" className={({ isActive }) => isActive ? "active" : ""}>Records</NavLink>
        </nav>
      </header>

      <div className="theme-container">
        <ThemeToggle
          theme={theme}
          toggleTheme={toggleTheme}
        />
      </div>

      <main>
        <Outlet />
      </main>
    </>
  );
}