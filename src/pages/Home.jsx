import { useMemo, useState } from "react";
import Header from "../components/layout/Header";
import NoteForm from "../components/notes/NoteForm";
import NoteList from "../components/notes/NoteList";
import SearchBar from "../components/notes/SearchBar";
import { useNotes } from "../context/NotesContext";

export default function Home() {
  const { notes, addNote, deleteNote, updateNote } = useNotes();

  const [searchTerm, setSearchTerm] = useState("");

  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      return (
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }, [notes, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <NoteForm onAdd={addNote} />
      <NoteList
        notes={filteredNotes}
        onUpdate={updateNote}
        onDelete={deleteNote}
      />
    </div>
  );
}
