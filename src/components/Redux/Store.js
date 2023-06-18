import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit';

const contactsReduser = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        setContacts(state, action) {
            return  action.payload;
        },
    },
})
const filterReducer = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        setFilter(state, action) {
            return action.payload;
        },
    },
})
export const { setFilter } = filterReducer.actions;
export const {setContacts } = contactsReduser.actions;

// export const setFilter = createAction('filter/setFilter ');
// export const setContacts  = createAction('contacts/setContacts ');


// const filterReducer = createReducer('', {
//     [setFilter ]: (state, action) => action.payload,
// });
// const contactsReduser = createReducer([], {
//     [setContacts]: (state, action) => action.payload,
// })

export const store = configureStore({
    reducer: {
        contacts: contactsReduser.reducer,
        filter: filterReducer.reducer
    },
});