import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../react/hooks";

import { actionUpdateSpeed, actionUpdateStatus, getSpeed, getStatus } from "../react/slices/statsSlice";

import { actionUpdateOriginalCells, actionUpdateCells, getOriginalCells, getCells } from "../react/slices/cellsSlice";

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

  const dispatch = useAppDispatch()

  const gameSpeed = useAppSelector((state) => getSpeed(state));
  const gameStatus: any = useAppSelector((state) => getStatus(state));

  const gameCells = useAppSelector((state) => getCells(state))
  const gameOriginalCells = useAppSelector((state) => getOriginalCells(state))

  const changeSpeed = (e) => {
    dispatch(actionUpdateSpeed(e.target.value))
  }

  const startGame = () => {
    dispatch(actionUpdateOriginalCells(gameCells))
    dispatch(actionUpdateStatus("playing"))
  }

  const continueGame = () => {
    dispatch(actionUpdateStatus("playing"));
  };

  const pauseGame = () => {
    dispatch(actionUpdateStatus("paused"));
  }

  const stopGame = () => {
    dispatch(actionUpdateCells(gameOriginalCells))
    dispatch(actionUpdateStatus("stopped"));
  }

  const moveToNextStep = () => {

    let newCells = gameCells

    const width = newCells.length
    const height = newCells[0].length

    newCells.map((row, rowIndex) => {
      row.map((cell, columnIndex) => {
        let count = 0



      })
    })

  }

  const PlayControls = () => {
    switch(gameStatus) {
      case "stopped": 
        return (
          <ControlStyle className="control">
            <ControlButtonStyle className="controlButtons" id="StartButton" onClick={startGame}>
              Start
            </ControlButtonStyle>
          </ControlStyle>
        )

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
              <ControlButtonStyle className="controlButtons" id="PauseButton">
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
  }

  return (
    <GameControlsStyle id="GameControls">
      <SpeedControlStyle className="control" id="SpeedControl">
        <h2 id="SpeedControlText">Speed: {gameSpeed}</h2>
        <input type="range" min="0.25" max="4" step="0.25" defaultValue={`${gameSpeed}`} onInput={changeSpeed} />
      </SpeedControlStyle>   

      <PlayControls /> 
        
    </GameControlsStyle>
  );
};

export default GameControls;
