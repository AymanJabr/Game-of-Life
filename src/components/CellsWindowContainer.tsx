import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_CELLS, UPDATE_SPEED, UPDATE_STATUS, UPDATE_GENERATION_NUMBER } from "../react/actions";

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

  return (
    <CellsWindowContainerStyle id="CellsWindowContainer">
      <CellsWindowStyle id="CellsWindow">
        <CellRowStyle className="cellRow">
          <CellStyle className="cell"></CellStyle>
          <CellStyle className="cell"></CellStyle>
          <CellStyle className="cell checked"></CellStyle>
          <CellStyle className="cell"></CellStyle>
          <CellStyle className="cell"></CellStyle>
        </CellRowStyle>
        <CellRowStyle className="cellRow">
          <CellStyle className="cell"></CellStyle>
          <CellStyle className="cell"></CellStyle>
          <CellStyle className="cell"></CellStyle>
          <CellStyle className="cell"></CellStyle>
          <CellStyle className="cell"></CellStyle>
        </CellRowStyle>
        <CellRowStyle className="cellRow">
          <CellStyle className="cell"></CellStyle>
          <CellStyle className="cell"></CellStyle>
          <CellStyle className="cell"></CellStyle>
          <CellStyle className="cell"></CellStyle>
          <CellStyle className="cell"></CellStyle>
        </CellRowStyle>
        <CellRowStyle className="cellRow">
          <CellStyle className="cell"></CellStyle>
          <CellStyle className="cell"></CellStyle>
          <CellStyle className="cell"></CellStyle>
          <CellStyle className="cell"></CellStyle>
          <CellStyle className="cell"></CellStyle>
        </CellRowStyle>
        <CellRowStyle className="cellRow">
          <CellStyle className="cell"></CellStyle>
          <CellStyle className="cell"></CellStyle>
          <CellStyle className="cell"></CellStyle>
          <CellStyle className="cell"></CellStyle>
          <CellStyle className="cell"></CellStyle>
        </CellRowStyle>
      </CellsWindowStyle>
    </CellsWindowContainerStyle>
  );
};

export default CellsWindowContainer;
