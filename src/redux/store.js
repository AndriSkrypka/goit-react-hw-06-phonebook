import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import {
  persistStore,FLUSH,
  REHYDRATE,PAUSE,PERSIST,
  PURGE,REGISTER,
} from 'redux-persist';

import { persistedContactsReducer } from './Contacts/contactsSlice';

import { filterReducer } from './Contacts/filterSlice';


const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

const persistor = persistStore(store);
export { store, persistor };