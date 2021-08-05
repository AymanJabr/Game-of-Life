import cellsReducer, {
    CellsState,
  actionUpdateCells, actionUpdateOriginalCells
} from "./cellsSlice";

describe("cells reducer", () => {
  const initialState: CellsState = {
    cells: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0],
    ],
    originalCells: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0],
    ],
  };

it("should update cells", () => {
  const actual = cellsReducer(
    initialState,
    actionUpdateCells([
      [0, 1, 0],
      [1, 0, 1],
      [0, 1, 0],
    ])
  );
  expect(actual.cells).toEqual([
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0],
  ]);
});

  it("should update originalCells", () => {
    const actual = cellsReducer(
      initialState,
      actionUpdateOriginalCells([
        [0, 1, 0],
        [1, 0, 1],
        [0, 1, 0],
      ])
    );
    expect(actual.originalCells).toEqual([
      [0, 1, 0],
      [1, 0, 1],
      [0, 1, 0],
    ]);
  });

});
