import { createContext, useContext, useEffect, useReducer } from "react";

const NotesContext = createContext();

function notesReducer(state, action) {
  switch (action.type) {
    case "ADD_NOTE":
      return [action.payload, ...state];

    case "DELETE_NOTE":
      return state.filter((note) => note.id !== action.payload);

    case "UPDATE_NOTE":
      return state.map((note) =>
        note.id === action.payload.id
          ? {
              ...note,
              ...action.payload.data,
            }
          : note,
      );
    default:
      return state;
  }
}

export function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(notesReducer, [], () => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (title, content) => {
    dispatch({
      type: "ADD_NOTE",
      payload: {
        id: Date.now(),
        title,
        content,
        createdAt: new Date(),
      },
    });
  };

  const deleteNote = (id) => {
    dispatch({
      type: "DELETE_NOTE",
      payload: id,
    });
  };

  const updateNote = (id, data) => {
    dispatch({
      type: "UPDATE_NOTE",
      payload: {
        id,
        data,
      },
    });
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        addNote,
        deleteNote,
        updateNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  return useContext(NotesContext);
}
