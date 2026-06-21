import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useTheme } from "../../context/ThemeContext";

export default function MainLayout() {
  const { theme } = useTheme();
  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <Navbar />
      <Outlet />
    </div>
  );
}
