import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notes: [],
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    add: (state, action) => {
      state.notes = [action.payload, ...state.notes];
    },
    remove: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    edit: (state, action) => {
      const noteIndex = state.notes.findIndex((note) => note.id === action.payload.id);
      state.notes[noteIndex] = action.payload;
    },
  },
});

export const { add, remove, edit } = notesSlice.actions;

export default notesSlice.reducer;
