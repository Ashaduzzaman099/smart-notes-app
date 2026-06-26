import api from "./api";

export const notesService = {
  async getNotes() {
    const response =
      await api.get("/posts");

    return response.data;
  },

  
};