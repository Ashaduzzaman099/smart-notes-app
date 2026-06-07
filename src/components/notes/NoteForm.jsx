import {useState} from "react"

export default function NoteForm({onAdd}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (!title || !content) return;

    onAdd(title, content);

    setTitle("");
    setContent("");
  }
  return (
    <div>
      <input 
      className="w-full p-2 bg-gray-700 rounded" 
      placeholder="Note Title"
      value={title}
      onChange={(e)=> setTitle(e.target.value)}
       />

       <textarea 
      className="w-full mt-3 mb-3 p-2 bg-gray-700 rounded" 
      placeholder="Note Content"
      value={content}
      onChange={(e)=> setContent(e.target.value)}
       />

       <button 
       onClick={handleSubmit}
       className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
       >
        Add Note
       </button>
    </div>
  )
}
