export const UPDATE_CELLS = 'UPDATE_CELLS';
export const UPDATE_SPEED = 'UPDATE_SPEED';
export const UPDATE_STATUS = 'UPDATE_STATUS';
export const UPDATE_GENERATION_NUMBER = 'UPDATE_GENERATION_NUMBER';

export const actionUpdateCells = (cells) => ({
  type: UPDATE_CELLS,
  cells,
});

export const actionUpdateSpeed = (speed) => ({
  type: UPDATE_SPEED,
  speed,
});

export const actionUpdateStatus = (status) => ({
  type: UPDATE_STATUS,
  status,
});

export const actionUpdateSpeed = (generationNumber) => ({
  type: UPDATE_GENERATION_NUMBER,
  generationNumber,
});
