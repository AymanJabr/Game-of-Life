import React from "react";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div id="GamePanel">
        Game Panel
        <button id="addButtonIcon">+</button>
        <button id="helpButtonIcon">?</button>
      </div>

      <div id="NewGameWindow" className="ninja"></div>
      <div id="HelpWindowContainer">
        <div id="HelpWindow">
          <img
            className="closeButton"
            src="./images/close-button.png"
            alt="close button"
          ></img>

          <div className="helpWindowElement">
            Create new game <input type="text" name="width" id="width" />{" "}
            <input type="text" name="height" id="height" />
          </div>
          <h1>OR</h1>
          <div className="helpWindowElement">
            <button id="UploadFile">Upload File</button>

            <p> File must be '.csv', it must contain one object in the format { `{[0, 1 , 1, 0],...,[1,1,1,1]}` }</p>
          </div>
        </div>
      </div>

      <div id="GameControls">
        <div className="control" id="SpeedControl">
          <h2>Speed</h2>
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
