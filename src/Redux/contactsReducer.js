import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: { data: [] },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.data.push(action.payload);
      },
      prepare: ({ name, number }) => {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact: (state, action) => {
      return state.data.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
