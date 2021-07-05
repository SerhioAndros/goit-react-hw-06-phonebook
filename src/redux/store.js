import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import contactsReducer from "./contacts-reducer";

const middleware = [...getDefaultMiddleware()];

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
});

export default store;
