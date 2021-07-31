import {
  UPDATE_CELLS,
  UPDATE_SPEED,
  UPDATE_STATUS,
  UPDATE_GENERATION_NUMBER,
} from "../actions/index";

const initialState = {
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
  speed: 1,
  status: 0,
  generationNumber: 0,
};

export default function statisticsReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CELLS:
      return {
        ...state,
        cells: action.cells,
      };

    case UPDATE_SPEED:
      return {
        ...state,
        speed: action.speed,
      };

    case UPDATE_STATUS:
      return {
        ...state,
        status: action.status,
      };

    case UPDATE_GENERATION_NUMBER:
      return {
        ...state,
        generationNumber: action.generationNumber,
      };

    default:
      return state;
  }
}
