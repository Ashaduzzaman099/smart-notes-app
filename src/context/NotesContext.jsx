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
