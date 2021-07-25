// import styled from "styled-components";

const GamePanel = () => {
  return (
    <div id="GamePanel">
      <div id="CellsWindowContainer">
        <div id="CellsWindow">
          <div className="cellRow">
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell checked"></div>
            <div className="cell"></div>
            <div className="cell"></div>
          </div>
          <div className="cellRow">
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
          </div>
          <div className="cellRow">
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
          </div>
          <div className="cellRow">
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
          </div>
          <div className="cellRow">
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
          </div>
        </div>
      </div>
      <button id="addButtonIcon">+</button>
      <button id="helpButtonIcon">?</button>
    </div>
  );
};

export default GamePanel;
