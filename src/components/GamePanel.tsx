// import styled from "styled-components";

import CellsWindowContainer from "./CellsWindowContainer";

const GamePanel = () => {
  return (
    <div id="GamePanel">
      <CellsWindowContainer />
      <button id="addButtonIcon">+</button>
      <button id="helpButtonIcon">?</button>
    </div>
  );
};

export default GamePanel;
