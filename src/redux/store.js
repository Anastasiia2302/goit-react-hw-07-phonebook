import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  reducers: {
    fetchContacts(state) {
      state.isLoading = true;
    },
    addContact(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },

    deleteContact(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;
