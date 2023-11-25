import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { apiSlice } from "./slices/apiSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { articleApi } from "./article";

const nonPersistedReducers = {
  [apiSlice.reducerPath]: apiSlice.reducer,
  [articleApi.reducerPath]: articleApi.reducer,
};

const nonPersistedReducer = combineReducers(nonPersistedReducers);

const rootReducer = combineReducers({
  nonPersisted: nonPersistedReducer,
  auth: authReducer,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
  whitelist: ["auth"], 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(articleApi.middleware, apiSlice.middleware),
});

export const persistor = persistStore(store);
