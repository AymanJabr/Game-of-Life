import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */

// Define a type for the slice state
export interface StatsState {
  speed: number;
  status: "playing" | "stopped" | "paused";
  generationNumber: number;
  showAdd: boolean;
  showHelp: boolean;
  wrongFileFormat: boolean;
}

// Define the initial state using that type
const initialState: StatsState = {
  speed: 2,
  status: "stopped",
  generationNumber: 0,
  showAdd: false,
  showHelp: false,
  wrongFileFormat: false
};


type StatusType = "playing" | "stopped" | "paused";


export const statsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    actionUpdateSpeed: (state, action: PayloadAction<number>) => {
      state.speed = action.payload;
    },
    actionUpdateStatus: (state, action: PayloadAction<StatusType>) => {
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
    actionUpdateWrongFileFormat: (state) => {
      state.wrongFileFormat = !state.wrongFileFormat;
    },
  },
});

export const { actionUpdateSpeed, actionUpdateStatus, actionUpdateGenerationNumber, actionUpdateShowAdd, actionUpdateShowHelp, actionUpdateWrongFileFormat } = statsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getSpeed = (state: RootState) => state.stats.speed
export const getStatus = (state: RootState) => state.stats.status;
export const getGenerationNumber = (state: RootState) => state.stats.generationNumber;
export const getShowAdd = (state: RootState) => state.stats.showAdd;
export const getShowHelp = (state: RootState) => state.stats.showHelp;
export const getWrongFileFormat = (state: RootState) => state.stats.wrongFileFormat;

export default statsSlice.reducer;
