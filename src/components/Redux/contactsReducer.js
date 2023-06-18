import { createSlice } from "@reduxjs/toolkit";

export const contactsReducer = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        setContacts(state, action) {
            return state.push(action.payload);
        },
    },
})

export const { setContacts } = contactsReducer.actions;
