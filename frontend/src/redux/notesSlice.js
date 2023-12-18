import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notes: [],
  prevState: [],
  filtered: false,
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    add: (state, action) => {
      state.notes = [action.payload, ...state.notes];
      state.prevState = [...state.notes];
    },
    remove: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      state.prevState = [...state.notes];
    },
    edit: (state, action) => {
      const noteIndex = state.notes.findIndex((note) => note.id === action.payload.id);
      state.notes[noteIndex] = action.payload;
      state.prevState = [...state.notes];
    },
    filterNotes: (state, action) => {
      state.prevState = [...state.notes];
      state.notes = [
        ...state.notes.filter((note) => note.tags.some((tag) => action.payload.includes(tag))),
      ];
      state.filtered = true;
    },
    reset: (state) => {
      state.notes = [...state.prevState];
      state.filtered = false;
    },
  },
});

export const { add, remove, edit, filterNotes, reset } = notesSlice.actions;

export default notesSlice.reducer;
