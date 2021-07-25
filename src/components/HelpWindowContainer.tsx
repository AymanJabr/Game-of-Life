// import styled from "styled-components";

const HelpWindowContainer = () => {
  return (
    <div id="HelpWindowContainer" className="ninja">
      <div id="HelpWindow">
        <img
          className="closeButton"
          src="./images/close-button.png"
          alt="close button"
        ></img>
        <h1 className="helpWindowElement">Game of Life Rules</h1>
        <p className="helpWindowElement">
          The Game of Life is a two-dimensional grid of square cells, each of
          which is in one of two possible states, live or dead. Every cell
          interacts with its eight neighbors, which are the cells that are
          horizontally, vertically, or diagonally adjacent. <br />
          <br /> At each step in time, the following transitions occur:
          <ol>
            <li>
              Any live cell with fewer than two live neighbors dies, as if by
              underpopulation.
            </li>
            <br />
            <li>
              Any live cell with two or three live neighbors lives on to the
              next generation.
            </li>
            <br />
            <li>
              Any live cell with more than three live neighbors dies, as if by
              overpopulation.
            </li>
            <br />
            <li>
              Any dead cell with exactly three live neighbors becomes a live
              cell, as if by reproduction.
            </li>
          </ol>
        </p>
      </div>
    </div>
  );
};

export default HelpWindowContainer;
