import NoteCard from "./NoteCard";

export default function NoteList({ notes, onDelete, onUpdate }) {
  return (
    <div className="grid gap-4 mt-4">
      {notes.length === 0 ? (
        <p className="text-gray-400">No Notes yet...</p>
      ) : (
        notes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}
