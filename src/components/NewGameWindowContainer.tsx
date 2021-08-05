import { useAppSelector, useAppDispatch } from "../react/hooks";

import {
  actionUpdateShowAdd,
  actionUpdateWrongFileFormat,
  getShowAdd,
  getWrongFileFormat,
} from "../react/slices/statsSlice";
import { actionUpdateCells } from "../react/slices/cellsSlice";

import styled from "styled-components";


type NewGameWindowContainerProps = {
};

const NewGameWindowContainer: React.FunctionComponent<NewGameWindowContainerProps> = () => {
  const NewGameWindowContainerStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80vh;
    overflow: auto;
    z-index: 2;
    background: rgba(128, 128, 128, 0.7);
  `;

  const NewGameWindowStyle = styled.div`
    position: absolute;
    top: 25%;
    left: 22%;
    width: 55vw;
    background: var(--main-black);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    padding: 2vw 1vw 0 1vw;
    align-items: center;
    & * {
      background-color: var(--main-black);
    }
  `;

  const NewGameWindowElementStyle = styled.div`
    background-color: var(--main-black);
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const InputContainerStyle = styled.div`
    display: flex;
  `;

  const NewGameInputContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const CreateGameButtonStyle = styled.button`
    border: 2px solid var(--main-light-gray);
    font-size: 1.2rem;
    width: 65%;
    margin-top: 1vw;
    padding-top: 0.25vw;
    padding-bottom: 0.25vw;
    &:hover {
      background-color: var(--main-light-gray-transparent);
    }
  `;

  const ErrorUploadTest = styled.h2`
    color: var(--main-red);
  `;

  const UploadFileStyle = styled.input`
    border: 2px solid var(--main-light-gray);
    width: 100%;
    font-size: 1.5rem;
    &:hover {
      background-color: var(--main-light-gray-transparent);
    }
  `;

  const dispatch = useAppDispatch();

  const showAdd = useAppSelector((state) => getShowAdd(state));
  const wrongFileFormat = useAppSelector((state) => getWrongFileFormat(state));

  const closeWindowButton = () => {
    dispatch(actionUpdateShowAdd());
  };

  const newGameFromDimensions = () => {
    const heightElement: HTMLInputElement = document.getElementById(
      "Height"
    ) as HTMLInputElement;
    const widthElement: HTMLInputElement = document.getElementById(
      "Width"
    ) as HTMLInputElement;

    let height = parseInt(heightElement.value);
    let width = parseInt(widthElement.value);

    height = isNaN(height) ? 6 : height;
    width = isNaN(width) ? 6 : width;

    const newCells: number[][] = new Array(height);

    for (let i = 0; i < height; i++) {
      newCells[i] = new Array(width);
      for (let j = 0; j < width; j++) {
        newCells[i][j] = 0;
      }
    }

    window.console.log(newCells);

    dispatch(actionUpdateCells(newCells));
    dispatch(actionUpdateShowAdd());

    if (wrongFileFormat) {
      dispatch(actionUpdateWrongFileFormat());
    }
  };

  const newGameFromFile = (e: { target: HTMLInputElement }) => {
    const fileReader = new FileReader();
    if (!e.target.files) return;
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      if (
        e &&
        e.target &&
        e.target.result &&
        typeof e.target.result === "string"
      ) {
        const newCellsString: string = e.target.result;

        let correctInput = true;
        let newCells;

        try {
          newCells = JSON.parse(newCellsString).cells;

          // Checks if the length of all rows is equal
          const rowLength: number = newCells[0].length;
          newCells.map((row: Array<number>) => {
            if (row.length !== rowLength) {
              correctInput = false;
            }
          });

          // Checks if all characters entered are 0 or 1
          newCells.map((row: Array<number>) => {
            row.map((cell) => {
              if (!(cell == 0 || cell == 1)) {
                correctInput = false;
              }
            });
          });
        } catch (e) {
          correctInput = false;
        }

        if (correctInput) {
          dispatch(actionUpdateCells(newCells));
          dispatch(actionUpdateShowAdd());
          if (wrongFileFormat) {
            dispatch(actionUpdateWrongFileFormat());
          }
        } else {
          dispatch(actionUpdateWrongFileFormat());
        }
      } else {
        dispatch(actionUpdateWrongFileFormat());
      }
    };
  };

  const closeWindow = (e: React.MouseEvent<Element, MouseEvent>): void => {
    if (e.target == document.getElementById("NewGameWindowContainer")) {
      dispatch(actionUpdateShowAdd());
      if (wrongFileFormat) {
        dispatch(actionUpdateWrongFileFormat());
      }
    }
  };

  return (
    <NewGameWindowContainerStyle
      id="NewGameWindowContainer"
      className={`${showAdd ? "" : "ninja"}`}
      onClick={(e) => closeWindow(e)}
    >
      <NewGameWindowStyle id="NewGameWindow">
        <img
          className="closeButton"
          src="./images/close-button.png"
          alt="close button"
          onClick={closeWindowButton}
        ></img>

        <NewGameWindowElementStyle>
          <h2>Create new game</h2> <br />
          <InputContainerStyle id="InputContainer">
            <NewGameInputContainerStyle>
              <label>Width</label>
              <input type="number" name="width" id="Width" min="3" />
            </NewGameInputContainerStyle>
            <NewGameInputContainerStyle>
              <label>Height</label>
              <input type="number" name="height" id="Height" min="3" />
            </NewGameInputContainerStyle>
          </InputContainerStyle>
          <CreateGameButtonStyle
            id="CreateGameButton"
            onClick={newGameFromDimensions}
          >
            Create Game
          </CreateGameButtonStyle>
        </NewGameWindowElementStyle>
        <h3>OR</h3>
        <NewGameWindowElementStyle>
          <UploadFileStyle
            id="UploadFile"
            onChange={newGameFromFile}
            type="file"
            name="file"
          ></UploadFileStyle>

          <p>
            {" "}
            File must be '.json', it must contain a single object in the format{" "}
            {`{ "cells": [ [0, 1 , 1, 0],...,[1,1,1,1] ]}`} .Where 1 is an
            'alive' cell, and 0 is a 'dead' cell. Each array represents a row of
            the game.
          </p>

          <ErrorUploadTest className={`${wrongFileFormat ? "" : "ninja"}`}>
            Error in Uploading file, make sure that the file is of type .json,
            and that each row has the same amount of columns.
          </ErrorUploadTest>
        </NewGameWindowElementStyle>
      </NewGameWindowStyle>
    </NewGameWindowContainerStyle>
  );
};

export default NewGameWindowContainer;
