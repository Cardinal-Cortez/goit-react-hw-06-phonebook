import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { contactsReducer } from "./contactsReducer";
import { filterReducer } from "./filterReducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedContactsReduser = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReduser,
    filter: filterReducer,
  },
});

export const persistor = persistStore(store);
