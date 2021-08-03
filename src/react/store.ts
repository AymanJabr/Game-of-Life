import { configureStore } from "@reduxjs/toolkit";

import cellsReducer from './slices/cellsSlice'
import statsReducer from './slices/statsSlice'

const store = configureStore({
  reducer: {
    cells: cellsReducer,
    stats: statsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
