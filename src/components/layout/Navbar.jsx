import { NavLink } from "react-router-dom";

export default function Navbar() {
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
      </div>
    </nav>
  );
}
