import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex gap-4">
        <NavLink to="/" className="text-white">
          Notes
        </NavLink>
        <NavLink to="/about" className="text-white">
          About
        </NavLink>
        <NavLink to="/setting" className="text-white">
          Setting
        </NavLink>
        <button
          onClick={toggleTheme}
          className="bg-gray-700 px-3 py-1 rounded text-white"
        >
          {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}
