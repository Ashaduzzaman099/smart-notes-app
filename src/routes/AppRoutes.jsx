import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import NotesPage from "../pages/NotesPage";
import AboutPage from "../pages/AboutPage";
import SettingsPage from "../pages/SettingsPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<NotesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/setting" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
