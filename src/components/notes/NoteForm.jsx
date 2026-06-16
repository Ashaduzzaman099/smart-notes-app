
import { useForm } from "react-hook-form";

export default function NoteForm({onAdd}) {
  const { register, handleSubmit, reset, formState:{errors}, } = useForm();

  const onSubmit = (data) => {
    onAdd(data.title, data.content);
    reset();
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-800 p-4 rounded-lg mb-6 space-y-3">
      <div>
        <input type="text" placeholder="Note Title" className="w-full p-2 bg-gray-700 rounded" {...register( "title", {
          required: "Title is Required",
          minLength: {
          value: 3,
          message: "Title must be at least 3 Characters"
          },
          })}
        />
        {errors.title && (<p className="text-red-400 text-sm mt-1">{errors.title.message}</p>)}
      </div>
      <div>
        <textarea type="text" placeholder="Note Content" className="w-full p-2 bg-gray-700 rounded" {...register( "content", {
          required: "Content is Required",
          minLength: {
          value: 5,
          message: "Content must be at least 5 Characters"
          },
          })}
        />
        {errors.content && (<p className="text-red-400 text-sm mt-1">{errors.content.message}</p>)}
      </div>
      <button
        type="submit"
        className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Note
      </button>
    </form>
    



    // <div>
    //   <input 
    //   className="w-full p-2 bg-gray-700 rounded" 
    //   placeholder="Note Title"
    //   value={title}
    //   onChange={(e)=> setTitle(e.target.value)}
    //    />

    //    <textarea 
    //   className="w-full mt-3 mb-3 p-2 bg-gray-700 rounded" 
    //   placeholder="Note Content"
    //   value={content}
    //   onChange={(e)=> setContent(e.target.value)}
    //    />

    //    <button 
    //    onClick={handleSubmit}
    //    className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
    //    >
    //     Add Note
    //    </button>
    // </div>


  )
}
