import { useState, useEffect } from "react";

export default function useTheme() {
    const [theme, setTheme] = useState(() => {
        // 1. Check localStorage first (user's explicit preference)
        const saved = localStorage.getItem("ki-theme");
        if (saved) return saved;

        // 2. Fall back to OS preference
        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("ki-theme", theme);
    }, [theme]);

    const toggleTheme = () =>
        setTheme(prev => (prev === "dark" ? "light" : "dark"));

    return { theme, toggleTheme };
}