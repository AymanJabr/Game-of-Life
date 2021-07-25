// import styled from "styled-components";

const NewGameWindowContainer = () => {
  return (
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
          <button id="CreateGameButton">Create Game</button>
        </div>
        <h3>OR</h3>
        <div className="newGameWindowElement">
          <button id="UploadFile">Upload File</button>

          <p>
            {" "}
            File must be '.csv', it must contain a single object in the format{" "}
            {`{ [0, 1 , 1, 0],...,[1,1,1,1] }`} .Where 1 is an 'alive' cell, and
            0 is a 'dead' cell.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewGameWindowContainer;
