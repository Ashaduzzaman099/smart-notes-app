

export default function NoteCard({note, onDelete}) {
  return (
    <div><div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-xl font-bold">{note.title}</h2>
      <p className="text-gray-300 mt-2">{note.content}</p>
    </div>
    <button onClick={()=> onDelete(note.id)} className="mt-3 bg-red-600 px-3 py-1 rounded hover:bg-red-700">Delete</button></div>
  )
}
