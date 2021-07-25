// import styled from "styled-components";

const GameControls = () => {

    return (
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
    );
}

export default GameControls 