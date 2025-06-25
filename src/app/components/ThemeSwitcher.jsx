// components/ThemeSwitcher.js
"use client";

import { useTheme } from "../context/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  const styles = {
    light: {
      backgroundColor: "#fff",
      color: "#333",
    },
    dark: {
      backgroundColor: "#333",
      color: "#fff",
    },
  };

  return (
    <div style={{ ...styles[theme], minHeight: "100%", padding: "2rem" }}>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "dark" : "light"} theme
      </button>
    </div>
  );
}
