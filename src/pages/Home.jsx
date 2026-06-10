import { useMemo, useState } from "react";
import Header from "../components/layout/Header";
import NoteForm from "../components/notes/NoteForm";
import NoteList from "../components/notes/NoteList";
import useNotes from "../hooks/useNotes";



export default function Home() {
  const { notes, addNote, deleteNote } = useNotes();

  const [searchTerm, setSearchTerm] = useState("");
  const filteredNotes = useMemo(()=>{
    return notes.filter((note)=>{
      
    })
  })


  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <Header />
      <NoteForm onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
}
