import statsReducer, {
  StatsState,
  actionUpdateSpeed,
  actionUpdateStatus,
  actionUpdateGenerationNumber,
  actionUpdateShowAdd,
  actionUpdateShowHelp,
  actionUpdateWrongFileFormat,
} from "./statsSlice";

describe("stats reducer", () => {
  const initialState: StatsState = {
    speed: 2,
    status: "stopped",
    generationNumber: 0,
    showAdd: false,
    showHelp: false,
    wrongFileFormat: false,
  };

  it("should update speed", () => {
    const actual = statsReducer(
      initialState,
      actionUpdateSpeed(3)
    );
    expect(actual.speed).toEqual(3);
  });

  it("should update status", () => {
    const actual = statsReducer(initialState, actionUpdateStatus("playing"));
    expect(actual.status).toEqual("playing");
  });

  it("should update generationNumber", () => {
    const actual = statsReducer(initialState, actionUpdateGenerationNumber(3));
    expect(actual.generationNumber).toEqual(3);
  });

  it("should update showAdd", () => {
    const actual = statsReducer(initialState, actionUpdateShowAdd());
    expect(actual.showAdd).toEqual(true);
  });

  it("should update showHelp", () => {
    const actual = statsReducer(initialState, actionUpdateShowHelp());
    expect(actual.showHelp).toEqual(true);
  });

  it("should update wrongFileFormat", () => {
    const actual = statsReducer(initialState, actionUpdateWrongFileFormat());
    expect(actual.wrongFileFormat).toEqual(true);
  });

});
