import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { sliceReducer } from "./slice";
import { shopApi } from "./shopAPI";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { sliceReducerLocalStore } from './sliceLocalStore';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [shopApi.reducerPath, "shop"]
}
 
const rootReducer = combineReducers({
  [shopApi.reducerPath]: shopApi.reducer,
  shop: sliceReducer,
  shopLocalStore:sliceReducerLocalStore
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
     
    }).concat(shopApi.middleware),
});

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>