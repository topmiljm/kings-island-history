export default function ThemeToggle({ theme, toggleTheme }) {
    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
        >
            {theme === "dark" ? "☀️" : "🌙"}
        </button>
    );
}
