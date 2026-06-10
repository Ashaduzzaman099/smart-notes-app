import { useState } from "react";

export default function NoteCard({ note, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);

  const [title, setTitle] = useState(note.title);

  const [content, setContent] = useState(note.content);

  const handleSave = () => {
    onUpdate(note.id, {
      title,
      content,
    });

    setIsEditing(false);
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      {isEditing ? (
        <>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 mb-2"
          />

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 rounded bg-gray-700"
          />

          <button
            onClick={handleSave}
            className="mt-3 bg-green-600 px-3 py-1 rounded"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold">{note.title}</h2>

          <p className="text-gray-300 mt-2">{note.content}</p>

          <div className="flex gap-2 mt-3">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 px-3 py-1 rounded"
            >
              Edit
            </button>

            <button
              onClick={() => onDelete(note.id)}
              className="bg-red-600 px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}
