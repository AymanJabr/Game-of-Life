import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import styled from "styled-components";

import CellsWindowContainer from "./CellsWindowContainer";

const GamePanel = () => {
  const GamePanelStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80vh;
    overflow: auto;
  `;

  const AddButtonStyle = styled.button`
    position: absolute;
    top: 3vh;
    right: 10px;
    border-radius: 50%;
    background: var(--main-red);
    color: var(--main-white);
    font-size: 1.5rem;
    padding: 0.8rem 1.2rem;
    -webkit-transition: all 0.25s linear;
    -moz-transition: all 0.25s linear;
    -o-transition: all 0.25s linear;
    transition: all 0.25s linear;
    &:hover {
      transform: scale(1.1) translateX(-1vw);
    }
  `;

  const HelpButtonStyle = styled.button`
    position: absolute;
    top: 12vh;
    right: 10px;
    border-radius: 50%;
    background: var(--main-black);
    color: var(--main-white);
    font-size: 1.5rem;
    padding: 0.8rem 1.2rem;
    -webkit-transition: all 0.25s linear;
    -moz-transition: all 0.25s linear;
    -o-transition: all 0.25s linear;
    transition: all 0.25s linear;
    &:hover {
      transform: scale(1.1) translateX(-1vw);
    }
  `;

  const dispatch = useDispatch()

  const changeAddVisibility = () => {
    // dispatch(actionShowHideAdd)
    // console.log('this works')
  }

  return (
    <GamePanelStyle id="GamePanel">
      <CellsWindowContainer />
      <AddButtonStyle onClick={changeAddVisibility} id="addButtonIcon">+</AddButtonStyle>
      <HelpButtonStyle id="helpButtonIcon">?</HelpButtonStyle>
    </GamePanelStyle>
  );
};

export default GamePanel;
