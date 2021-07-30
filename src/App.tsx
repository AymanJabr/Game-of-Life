import React from "react";
import "./index.css";

function App() {
  return (
    <div className="App">
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
      <div id="NewGameWindowContainer" className="ninja">
        <div id="NewGameWindow">
          <img
            className="closeButton"
            src="./images/close-button.png"
            alt="close button"
          ></img>

          <div className="newGameWindowElement">
            <h2>Create new game</h2> <br />
            <div id="InputContainer">
              <div className="newGameInputContainer">
                <label>Width</label>
                <input type="number" name="width" id="Width" min="3" />
              </div>
              <div className="newGameInputContainer">
                <label>Height</label>
                <input type="number" name="height" id="Height" min="3" />
              </div>
            </div>
            <button id="CreateGameButton">
              Create Game
            </button>
          </div>
          <h3>OR</h3>
          <div className="newGameWindowElement">
            <button id="UploadFile">Upload File</button>

            <p>
              {" "}
              File must be '.csv', it must contain a single object in the format{" "}
              {`{ [0, 1 , 1, 0],...,[1,1,1,1] }`} .Where 1 is an 'alive' cell, and 0 is a 'dead' cell.
            </p>
          </div>
        </div>
      </div>

      <div id="GameControls">
        <div className="control" id="SpeedControl">
          <h2 id="SpeedControlText">Speed: 2</h2>
          <input type="range" min="0.25" max="4" step="0.25" />
        </div>
        <div className="control">
          <button className="controlButtons" id="StartStopButton">
            Start
          </button>
          <button className="controlButtons" id="PauseButton">
            Pause
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
