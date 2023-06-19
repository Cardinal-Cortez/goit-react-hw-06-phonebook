import { createSlice } from "@reduxjs/toolkit";

export const contactsReducer = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    setContacts(state, action) {
      state.contacts = [...action.payload];
    },
  },
});

export const { setContacts } = contactsReducer.actions;


