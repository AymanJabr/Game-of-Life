import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface StatsState {
  speed: number;
  status: "playing" | "stopped" | "paused";
  generationNumber: number;
  showAdd: boolean;
  showHelp: boolean;
}

// Define the initial state using that type
const initialState: StatsState = {
  speed: 1,
  status: "stopped",
  generationNumber: 0,
  showAdd: false,
  showHelp: false,
};

export const statsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    actionUpdateSpeed: (state, action: PayloadAction<number>) => {
      state.speed = action.payload;
    },
    actionUpdateStatus: (state, action: PayloadAction<any>) => {
      state.status = action.payload;
    },
    actionUpdateGenerationNumber: (state, action: PayloadAction<number>) => {
      state.generationNumber = action.payload;
    },
    actionUpdateShowAdd: (state) => {
      state.showAdd = !state.showAdd;
    },
    actionUpdateShowHelp: (state) => {
      state.showHelp = !state.showHelp;
    },
  },
});

export const { actionUpdateSpeed, actionUpdateStatus, actionUpdateGenerationNumber, actionUpdateShowAdd, actionUpdateShowHelp } = statsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getSpeed = (state: RootState) => state.stats.speed
export const getStatus = (state: RootState) => state.stats.status;
export const getGenerationNumber = (state: RootState) => state.stats.generationNumber;
export const getShowAdd = (state: RootState) => state.stats.showAdd;
export const getShowHelp = (state: RootState) => state.stats.showHelp;

export default statsSlice.reducer;
