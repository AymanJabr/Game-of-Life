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

  // const gameCells = useAppSelector((state) => state.cells.cells);
  const gameCells = useAppSelector((state) => getCells(state));
  const dispatch = useAppDispatch();

  // useEffect(() => {
    
  // }, [gameCells]);

  return (
    <CellsWindowContainerStyle id="CellsWindowContainer">
      <CellsWindowStyle id="CellsWindow">
        {gameCells.map((row) => (
          <CellRowStyle className="cellRow">
            {row.map((cell) =>
              cell == 1 ? (
                <CellStyle className="cell checked"></CellStyle>
              ) : (
                <CellStyle className="cell"></CellStyle>
              )
            )}
          </CellRowStyle>
        ))}

      </CellsWindowStyle>
    </CellsWindowContainerStyle>
  );
};

export default CellsWindowContainer;
