import { createSlice } from "@reduxjs/toolkit";

export const filterReducer = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        setFilter(state, action) {
            return action.payload;
        },
    },
})
export const { setFilter } = filterReducer.actions;
