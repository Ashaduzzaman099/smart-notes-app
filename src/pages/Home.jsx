import Header from "../components/layout/Header";
import NoteForm from "../components/notes/NoteForm";
import NoteList from "../components/notes/NoteList";
import useNotes from "../hooks/useNotes";

export default function Home() {
  const { notes, addNote, deleteNote } = useNotes();
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <Header />
      <NoteForm onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
}
