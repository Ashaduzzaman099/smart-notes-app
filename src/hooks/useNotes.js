import { useState, useEffect } from "react";

export default function useNotes() {
  const [notes, setNotes] = useState(() => {
    const sevedNotes = localStorage.getItem("notes");
    return sevedNotes ? JSON.parse(sevedNotes) : [];
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

  return {
    notes,
    addNote,
    deleteNote,
  };
}
