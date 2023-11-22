import { combineReducers, configureStore} from '@reduxjs/toolkit'
import authReducer from './slices/authSlice';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { articleApi } from './article'

const rootReducer = combineReducers({auth: authReducer, [articleApi.reducerPath]:articleApi.reducer})

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck:false,
    }).concat(articleApi.middleware),
  })
  
  export const persistor = persistStore(store);