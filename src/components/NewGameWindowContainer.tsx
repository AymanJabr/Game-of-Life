import styled from "styled-components";

const NewGameWindowContainer = () => {

  const NewGameWindowContainerStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80vh;
    overflow: auto;
    z-index: 2;
    background: rgba(128, 128, 128, 0.7);
  `;

  const NewGameWindowStyle = styled.div`
    position: absolute;
    top: 25%;
    left: 22%;
    width: 55vw;
    background: var(--main-black);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    padding: 2vw 1vw 0 1vw;
    align-items: center;
    & * {
      background-color: var(--main-black);
    }
  `;

  const NewGameWindowElementStyle = styled.div`
    background-color: var(--main-black);
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const InputContainerStyle = styled.div`
   display: flex;
  `

  const NewGameInputContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const CreateGameButtonStyle = styled.button`
    border: 2px solid var(--main-light-gray);
    font-size: 1.2rem;
    width: 65%;
    margin-top: 1vw;
    padding-top: 0.25vw;
    padding-bottom: 0.25vw;
    &:hover {
      background-color: var(--main-light-gray-transparent);
    }
  `;


    const UploadFileStyle = styled.button`
      border: 2px solid var(--main-light-gray);
      width: 100%;
      font-size: 1.5rem;
      &:hover {
        background-color: var(--main-light-gray-transparent);
      }
    `;


  return (
    <NewGameWindowContainerStyle id="NewGameWindowContainer" className="ninja">
      <NewGameWindowStyle id="NewGameWindow">
        <img
          className="closeButton"
          src="./images/close-button.png"
          alt="close button"
        ></img>

        <NewGameWindowElementStyle>
          <h2>Create new game</h2> <br />
          <InputContainerStyle id="InputContainer">
            <NewGameInputContainerStyle>
              <label>Width</label>
              <input type="number" name="width" id="Width" min="3" />
            </NewGameInputContainerStyle>
            <NewGameInputContainerStyle>
              <label>Height</label>
              <input type="number" name="height" id="Height" min="3" />
            </NewGameInputContainerStyle>
          </InputContainerStyle>
          <CreateGameButtonStyle id="CreateGameButton">
            Create Game
          </CreateGameButtonStyle>
        </NewGameWindowElementStyle>
        <h3>OR</h3>
        <NewGameWindowElementStyle>
          <UploadFileStyle id="UploadFile">Upload File</UploadFileStyle>

          <p>
            {" "}
            File must be '.csv', it must contain a single object in the format{" "}
            {`{ [0, 1 , 1, 0],...,[1,1,1,1] }`} .Where 1 is an 'alive' cell, and
            0 is a 'dead' cell.
          </p>
        </NewGameWindowElementStyle>
      </NewGameWindowStyle>
    </NewGameWindowContainerStyle>
  );
};

export default NewGameWindowContainer;
