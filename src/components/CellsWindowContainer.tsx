import { useAppSelector, useAppDispatch } from "../react/hooks";

import { actionUpdateCells, getCells } from "../react/slices/cellsSlice";

import styled from "styled-components";

const CellsWindowContainer = () => {
  const gameCells = useAppSelector((state) => getCells(state));
  const dispatch = useAppDispatch();

  const cellsNumber = gameCells.length >= gameCells[0].length ? gameCells.length : gameCells[0].length
  let cellLength = Math.floor(10 / (cellsNumber/8));
  cellLength = cellLength > 4 ? 4 : cellLength
  cellLength = cellLength < 1 ? 1 : cellLength;

  const CellsWindowContainerStyle = styled.div`
    height: 100%;
  `;

  const CellsWindowStyle = styled.div`
    position: absolute;
    top: 2vh;
    left: 0;
    right: 0;
    margin: 2rem auto;
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
    height: ${cellLength}vw;
    width: ${cellLength}vw;
    background-color: var(--main-black);
    border: 3px solid var(--main-light-gray);
    margin: 0;
    border-radius: 5px;
    cursor: pointer;
  `;

  const switchCell = (rowIndex : number, columnIndex : number) => {

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
                  key={columIndex}
                  onClick={() => switchCell(rowIndex, columIndex)}
                ></CellStyle>
              ) : (
                <CellStyle
                  className="cell"
                  key={columIndex}
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
