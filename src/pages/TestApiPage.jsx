import { useEffect } from "react";
import { notesService } from "../services/notesService";

export default function TestApiPage() {
  useEffect(() => {
    const fetchNotes = async () => {
      const data = await notesService.getNotes();

      console.log(data);
    };

    fetchNotes();
  }, []);

  return <div className="p-6">API Test Page</div>;
}
