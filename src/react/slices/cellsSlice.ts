import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */

// Define a type for the slice state
export interface CellsState {
  cells: Array<Array<number>>,
  originalCells: Array<Array<number>>
}

// Define the initial state using that type
const initialState: CellsState = {
  cells: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  originalCells: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
};

export const cellsSlice = createSlice({
  name: "cells",
  initialState,
  reducers: {
    actionUpdateCells: (state, action: PayloadAction<Array<Array<number>>>) => {
      state.cells = action.payload;
    },
    actionUpdateOriginalCells: (
      state,
      action: PayloadAction<Array<Array<number>>>
    ) => {
      state.originalCells = action.payload;
    },
  },
});

export const { actionUpdateCells, actionUpdateOriginalCells} = cellsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getCells =  (state: RootState) => state.cells.cells
export const getOriginalCells = (state: RootState) => state.cells.originalCells;

export default cellsSlice.reducer