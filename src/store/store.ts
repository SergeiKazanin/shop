import {configureStore} from '@reduxjs/toolkit'
import { sliceReducer } from "./slice";
import { shopApi } from "./shopAPI";

export const store = configureStore({
  reducer: {
    [shopApi.reducerPath]: shopApi.reducer,
    shop: sliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>