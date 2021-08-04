import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../react/hooks";

import { actionUpdateCells, getCells } from "../react/slices/cellsSlice";

import styled from "styled-components";

const CellsWindowContainer = () => {
  const CellsWindowContainerStyle = styled.div`
    height: 100%;
  `;

  const CellsWindowStyle = styled.div`
    height: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const CellRowStyle = styled.div`
    display: flex;
  `;

  const CellStyle = styled.div`
    height: 3vw;
    width: 3vw;
    background-color: var(--main-black);
    border: 3px solid var(--main-light-gray);
    margin: 1vw;
    border-radius: 5px;
    cursor: pointer;
  `;

  const gameCells = useAppSelector((state) => getCells(state));
  const dispatch = useAppDispatch();


  const switchCell = (rowIndex, columnIndex) => {

    const newGameCells : number[][] = []
    
    gameCells.map((row, firstIndex) => {
      if(firstIndex == rowIndex) {
        const newGameRow : number[] = []
        row.map((column, secondIndex) => {
          if(secondIndex == columnIndex) {
            const myCell = column == 1 ? 0 : 1;
            newGameRow.push(myCell);
          } else {
            newGameRow.push(gameCells[firstIndex][secondIndex]);
          }
        })

        newGameCells.push(newGameRow)
      } else {
        newGameCells.push(gameCells[firstIndex])
      }
    })

    dispatch(actionUpdateCells(newGameCells))
  }


  return (
    <CellsWindowContainerStyle id="CellsWindowContainer">
      <CellsWindowStyle id="CellsWindow">
        {gameCells.map((row, rowIndex) => (
          <CellRowStyle className="cellRow" key={rowIndex}>
            {row.map((cell, columIndex) =>
              cell == 1 ? (
                <CellStyle
                  className="cell checked"
                  key={[rowIndex, columIndex]}
                  onClick={() => switchCell(rowIndex, columIndex)}
                ></CellStyle>
              ) : (
                <CellStyle
                  className="cell"
                  key={[rowIndex, columIndex]}
                  onClick={() => switchCell(rowIndex, columIndex)}
                ></CellStyle>
              )
            )}
          </CellRowStyle>
        ))}
      </CellsWindowStyle>
    </CellsWindowContainerStyle>
  );
};

export default CellsWindowContainer;
