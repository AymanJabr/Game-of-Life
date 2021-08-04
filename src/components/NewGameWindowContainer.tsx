import { useEffect, useState } from "react";

import { useAppSelector, useAppDispatch } from "../react/hooks";

import {  actionUpdateShowAdd, getShowAdd } from "../react/slices/statsSlice";
import { actionUpdateCells } from "../react/slices/cellsSlice";


import styled from "styled-components";

const NewGameWindowContainer = () => {
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


  const UploadFileStyle = styled.button`
    border: 2px solid var(--main-light-gray);
    width: 100%;
    font-size: 1.5rem;
    &:hover {
      background-color: var(--main-light-gray-transparent);
    }
  `;

  const dispatch = useAppDispatch()

  const  showAdd = useAppSelector((state) => getShowAdd(state))

  const closeWindowButton = () => {
    dispatch(actionUpdateShowAdd());
  };

  const newGameFromDimensions = () => {
    const heightElement: HTMLInputElement = document.getElementById("Height") as HTMLInputElement
    const widthElement: HTMLInputElement = document.getElementById("Width") as HTMLInputElement

    // window.console.log(`heightElement: ${heightElement}, widthElement: ${widthElement}`);


    let height = parseInt(heightElement.value) ;
    let width = parseInt(widthElement.value);

    // window.console.log(`height: ${height}, width: ${width}`);


    height = isNaN(height) ? 6 : height ;
    width = isNaN(width) ? 6 : width ;   

    window.console.log(`height: ${height}, width: ${width}`)

    const newCells: number[][] = new Array(height);

    for (let i = 0; i < height; i++) {
      newCells[i] = new Array(width);
      for (let j = 0; j < width; j++) {
        newCells[i][j] = 0
      }
    }

    window.console.log(newCells)

    dispatch(actionUpdateCells(newCells))
    dispatch(actionUpdateShowAdd())
  }

  const closeWindow = (e) => {
    if (e.target == document.getElementById("NewGameWindowContainer")) {
      dispatch(actionUpdateShowAdd());
    }
  };

  return (
    <NewGameWindowContainerStyle id="NewGameWindowContainer" className={`${showAdd ? '' : 'ninja'}`} onClick={closeWindow}>
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
          <CreateGameButtonStyle id="CreateGameButton"
          onClick={newGameFromDimensions}>
            Create Game
          </CreateGameButtonStyle>
        </NewGameWindowElementStyle>
        <h3>OR</h3>
        <NewGameWindowElementStyle>
          <UploadFileStyle id="UploadFile">Upload File</UploadFileStyle>

          <p>
            {" "}
            File must be '.csv', it must contain a single object in the format{" "}
            {`{ [0, 1 , 1, 0],...,[1,1,1,1] }`} .Where 1 is an 'alive' cell, and
            0 is a 'dead' cell.
          </p>
        </NewGameWindowElementStyle>
      </NewGameWindowStyle>
    </NewGameWindowContainerStyle>
  );
};


export default NewGameWindowContainer;

