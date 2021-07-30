import styled from "styled-components";

const GameControlsStyle = styled.div`
  position: fixed;
  top: 80vh;
  left: 0;
  right: 0;
  height: 20vh;
  background: var(--main-black);
  border: solid var(--main-red);
  border-radius: 10px;
  border-width: 5px;
  color: var(--main-black);
  display: flex;
  padding-left: 2vw;
  & * {
    background-color: var(--main-black);
  }
`;

const ControlStyle = styled.div`
  flex: 1;
  display: flex;
`;

const ControlButtonStyle = styled.button`
  flex: 1;
  cursor: pointer;
  font-size: 1.5rem;
  margin: 1.5vw;
  &:hover {
    background-color: var(--main-light-gray-transparent);
  }
`;

const SpeedControlStyle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GameControls = () => {
    return (
      <GameControlsStyle id="GameControls">
        <SpeedControlStyle className="control" id="SpeedControl">
          <h2 id="SpeedControlText">Speed: 2</h2>
          <input type="range" min="0.25" max="4" step="0.25" />
        </SpeedControlStyle>
        <ControlStyle className="control">
          <ControlButtonStyle className="controlButtons" id="StartStopButton">
            Start
          </ControlButtonStyle>
          <ControlButtonStyle className="controlButtons" id="PauseButton">
            Pause
          </ControlButtonStyle>
        </ControlStyle>
      </GameControlsStyle>
    );
}

export default GameControls 