import { useEffect} from "react";
import { useAppSelector, useAppDispatch } from "../react/hooks";

import {
  actionUpdateGenerationNumber,
  actionUpdateSpeed,
  actionUpdateStatus,
  getGenerationNumber,
  getSpeed,
  getStatus,
} from "../react/slices/statsSlice";

import {
  actionUpdateOriginalCells,
  actionUpdateCells,
  getOriginalCells,
  getCells,
} from "../react/slices/cellsSlice";

import styled from "styled-components";

const GameControlsStyle = styled.div`
  position: fixed;
  top: 80vh;
  left: 0;
  right: 0;
  height: 20vh;
  background: var(--main-black);
  border: solid var(--main-red);
  border-radius: 10px;
  border-width: 5px;
  color: var(--main-black);
  display: flex;
  padding-left: 2vw;
  & * {
    background-color: var(--main-black);
  }
`;
const ControlStyle = styled.div`
  flex: 1;
  display: flex;
`;
const ControlButtonStyle = styled.button`
  flex: 1;
  cursor: pointer;
  font-size: 1.5rem;
  margin: 1.5vw;
  &:hover {
    background-color: var(--main-light-gray-transparent);
  }
`;
const SpeedControlStyle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GameControls = () => {
  const dispatch = useAppDispatch();

  const gameSpeed = useAppSelector((state) => getSpeed(state));
  const gameStatus: any = useAppSelector((state) => getStatus(state));
  const generationNumber = useAppSelector((state) => getGenerationNumber(state))

  const gameCells = useAppSelector((state) => getCells(state));
  const gameOriginalCells = useAppSelector((state) => getOriginalCells(state));

  useEffect(() => {
    const interval = setInterval(() => {
      if (gameStatus == "playing") {
        window.console.log(`speed is: ${2000 / gameSpeed} ms`);
        moveToNextStep();
      }
    }, 1000 / gameSpeed);
    return () => clearInterval(interval);
  }, [generationNumber ,gameStatus]);

  const changeSpeed = (value : string) => {
    dispatch(actionUpdateSpeed(parseFloat(value)));
  };

  const startGame = () => {
    dispatch(actionUpdateOriginalCells(gameCells));
    dispatch(actionUpdateStatus("playing"));
  };

  const continueGame = () => {
    dispatch(actionUpdateStatus("playing"));
  };

  const pauseGame = () => {
    dispatch(actionUpdateStatus("paused"));
  };

  const stopGame = () => {
    dispatch(actionUpdateStatus("stopped"));
    dispatch(actionUpdateGenerationNumber(0))
    dispatch(actionUpdateCells(gameOriginalCells));
  };

  const moveToNextStep = () => {
    const height = gameCells.length;
    const width = gameCells[0].length;

    const newCells: number[][] = new Array(height);

    for (let i = 0; i < height; i++) {
      newCells[i] = new Array(width);
    }

    gameCells.map((row, rowIndex) => {
      row.map((cell, columnIndex) => {
        let count = 0;

        // Checking horizontally and vertically
        if (rowIndex !== 0) {
          if (gameCells[rowIndex - 1][columnIndex] == 1) {
            count += 1;
          }
        }
        if (rowIndex !== height - 1) {
          if (gameCells[rowIndex + 1][columnIndex] == 1) {
            count += 1;
          }
        }
        if (columnIndex !== 0) {
          if (gameCells[rowIndex][columnIndex - 1] == 1) {
            count += 1;
          }
        }
        if (columnIndex !== width - 1) {
          if (gameCells[rowIndex][columnIndex + 1] == 1) {
            count += 1;
          }
        }

        // Checking diagonally
        if (rowIndex !== 0 && columnIndex !== 0) {
          if (gameCells[rowIndex - 1][columnIndex - 1] == 1) {
            count += 1;
          }
        }
        if (rowIndex !== height - 1 && columnIndex !== 0) {
          if (gameCells[rowIndex + 1][columnIndex - 1] == 1) {
            count += 1;
          }
        }
        if (rowIndex !== 0 && columnIndex !== width - 1) {
          if (gameCells[rowIndex - 1][columnIndex + 1] == 1) {
            count += 1;
          }
        }
        if (rowIndex !== height - 1 && columnIndex !== width - 1) {
          if (gameCells[rowIndex + 1][columnIndex + 1] == 1) {
            count += 1;
          }
        }

        let newCell: number;

        if (cell == 1) {
          newCell = count > 1 && count < 4 ? 1 : 0;
        } else {
          newCell = count == 3 ? 1 : 0;
        }

        newCells[rowIndex][columnIndex] = newCell;
      });
    });

    dispatch(actionUpdateCells(newCells));
    dispatch(actionUpdateGenerationNumber(generationNumber + 1));
  };

  const PlayControls = () => {
    switch (gameStatus) {
      case "stopped":
        return (
          <ControlStyle className="control">
            <ControlButtonStyle
              className="controlButtons"
              id="StartButton"
              onClick={startGame}
            >
              Start
            </ControlButtonStyle>
          </ControlStyle>
        );

      case "playing":
        return (
          <ControlStyle className="control">
            <ControlButtonStyle
              className="controlButtons"
              id="PauseButton"
              onClick={pauseGame}
            >
              Pause
            </ControlButtonStyle>
            <ControlButtonStyle
              className="controlButtons"
              id="StartStopButton"
              onClick={stopGame}
            >
              Stop
            </ControlButtonStyle>
          </ControlStyle>
        );

      case "paused":
        return (
          <ControlStyle className="control">
            <ControlButtonStyle
              className="controlButtons"
              id="StartButton"
              onClick={continueGame}
            >
              Continue
            </ControlButtonStyle>
            <ControlButtonStyle
              className="controlButtons"
              id="PauseButton"
              onClick={moveToNextStep}
            >
              Next Step
            </ControlButtonStyle>
            <ControlButtonStyle
              className="controlButtons"
              id="StopButton"
              onClick={stopGame}
            >
              Stop
            </ControlButtonStyle>
          </ControlStyle>
        );

      default:
        return (
          <ControlStyle className="control">
            <ControlButtonStyle
              className="controlButtons"
              id="StartStopButton"
              onClick={startGame}
            >
              Start
            </ControlButtonStyle>
          </ControlStyle>
        );
    }
  };

  return (
    <GameControlsStyle id="GameControls">
      <SpeedControlStyle className="control" id="SpeedControl">
        <h2 id="SpeedControlText">Speed: {gameSpeed}</h2>
        <input
          type="range"
          min="0.25"
          max="4"
          step="0.25"
          defaultValue={`${gameSpeed}`}
          onInput={(e) => changeSpeed(e.currentTarget.value)}
        />
      </SpeedControlStyle>

      <PlayControls />
    </GameControlsStyle>
  );
};

export default GameControls;
