import { useEffect, useState } from "react";
import NoteForm from "../components/notes/NoteForm";
import NoteList from "../components/notes/NoteList";

export default function Home() {
  const [notes, setNotes] = useState(() => {
    const sevedNotes = localStorage.getItem("notes");

    if (sevedNotes) {
      return JSON.parse(sevedNotes);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Add Note

  const addNote = (title, content) => {
    const newNote = {
      id: Date.now(),
      title,
      content,
      createdAt: new Date(),
    };
    setNotes([newNote, ...notes]);
  };

  // Delete Note
  const deleteNote = (id) => {
    const filtered = notes.filter((note) => note.id !== id);
    setNotes(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className=" text-3xl font-bold mb-6">Smart Note App</h1>

      <NoteForm onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
}
