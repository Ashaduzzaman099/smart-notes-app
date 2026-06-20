import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function MainLayout() {
  return (
    <div className="main-h-screen bg-gray-900">
      <Navbar />
      <Outlet />
    </div>
  );
}
