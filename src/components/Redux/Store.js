import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import { contactsReducer } from './contactsReducer';
import { filterReducer } from './filterReducer';

// export const setFilter = createAction('filter/setFilter ');
// export const setContacts  = createAction('contacts/setContacts ');


// const filterReducer = createReducer('', {
//     [setFilter ]: (state, action) => action.payload,
// });
// const contactsReduser = createReducer([], {
//     [setContacts]: (state, action) => action.payload,
// })

const persistConfig = {
  key: 'root',
    storage,
}
const persisedContactsReduser = persistReducer(
    persistConfig,
    contactsReducer.reducer
);

export const store = configureStore({
    reducer: {
        contacts: persisedContactsReduser,
        filter: filterReducer.reducer
    },
});
export const persistor = persistStore(store);