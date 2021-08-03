import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface CellsState {
  cells: Array<Array<number>>
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
};

export const cellsSlice = createSlice({
  name: "cells",
  initialState,
  reducers: {
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    actionUpdateCells: (state, action: PayloadAction<Array<Array<number>>>) => {
      state.cells = action.payload;
    },
  },
});

export const { actionUpdateCells} = cellsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.cells.cells

export default cellsSlice.reducer