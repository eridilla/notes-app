import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchNotes = createAsyncThunk('notes/fetchNotes', async () => {
  const res = await axios.get('https://657fb4f26ae0629a3f538905.mockapi.io/notes-app/api/notes');
  return res.data;
});

const initialState = {
  notes: [],
  filtered: false,
  descending: true,
  loading: true,
  error: null,
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    add: (state, action) => {
      state.notes = state.descending
        ? [action.payload, ...state.notes]
        : [...state.notes, action.payload];
    },
    remove: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    edit: (state, action) => {
      const noteIndex = state.notes.findIndex((note) => note.id === action.payload.id);
      state.notes[noteIndex] = action.payload;
    },
    filterNotes: (state, action) => {
      state.notes = [
        ...state.notes.filter((note) => note.tags.some((tag) => action.payload.includes(tag))),
      ];
      state.filtered = true;
    },
    reset: (state) => {
      state.filtered = false;
    },
    sort: (state) => {
      state.descending = !state.descending;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.loading = false;
        state.notes = state.descending ? [...action.payload.reverse()] : [...action.payload];
      })
      .addCase(fetchNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { add, remove, edit, filterNotes, reset, sort } = notesSlice.actions;

export default notesSlice.reducer;
