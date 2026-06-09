import NoteForm from "../components/notes/NoteForm";
import NoteList from "../components/notes/NoteList";
import useNotes from "../hooks/useNotes";

export default function Home() {
  const { notes, addNote, deleteNote } = useNotes();
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className=" text-3xl font-bold mb-6">Smart Note App</h1>

      <NoteForm onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
}
