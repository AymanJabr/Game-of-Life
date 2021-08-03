import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

const HelpWindowContainer = () => {
  const HelpWindowContainerStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80vh;
    overflow: auto;
    z-index: 2;
    background: rgba(128, 128, 128, 0.7);
  `;

  const HelpWindowStyle = styled.div`
    position: absolute;
    top: 15%;
    left: 22%;
    width: 55vw;
    background: var(--main-black);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    padding: 2vw;
    padding-bottom: 0;
    & * {
      background-color: var(--main-black);
    }
  `;

  return (
    <HelpWindowContainerStyle id="HelpWindowContainer" className="ninja">
      <HelpWindowStyle id="HelpWindow">
        <img
          className="closeButton"
          src="./images/close-button.png"
          alt="close button"
        ></img>
        <h1>Game of Life Rules</h1>
        <p>
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
      </HelpWindowStyle>
    </HelpWindowContainerStyle>
  );
};

export default HelpWindowContainer;
