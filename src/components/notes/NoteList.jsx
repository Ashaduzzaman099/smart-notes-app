import EmptyState from "../ui/EmptyState";
import NoteCard from "./NoteCard";

export default function NoteList({ notes, onDelete, onUpdate }) {
  return (
    <div className="grid gap-4 mt-4">
      {notes.length === 0 ? (
        <EmptyState
          title="No Notes Found"
          description="Create your first note to get started."
        />
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
