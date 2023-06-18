import { createSlice } from "@reduxjs/toolkit";

export const contactsReducer = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        setContacts(state, action) {
            return action.payload;
        },
    },
})

export const { setContacts } = contactsReducer.actions;
