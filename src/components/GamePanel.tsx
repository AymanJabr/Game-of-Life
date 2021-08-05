import { useAppSelector, useAppDispatch } from "../react/hooks";

import { actionUpdateShowHelp, actionUpdateShowAdd, getGenerationNumber} from "../react/slices/statsSlice";

import styled from "styled-components";

import CellsWindowContainer from "./CellsWindowContainer";

type GamePanelProps = {
};

const GamePanel: React.FunctionComponent<GamePanelProps> = () => {
  const GamePanelStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80vh;
    overflow: auto;
  `;

  const AddButtonStyle = styled.button`
    position: fixed;
    top: 3vh;
    right: 25px;
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
    position: fixed;
    top: 12vh;
    right: 25px;
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

  const GenerationCounterStyle = styled.h2 `
    position: fixed;
    top: 1vh;
    left: 10px;
    margin-top: 0;
  `

  const generationNumber = useAppSelector((state) => getGenerationNumber(state))

  const dispatch = useAppDispatch()

  const changeShowHelpVisibility = () => {
    dispatch(actionUpdateShowHelp())
  }
  const changeShowAddVisibility = () => {
    dispatch(actionUpdateShowAdd())
  }

  return (
    <GamePanelStyle id="GamePanel">
      <CellsWindowContainer />
      <AddButtonStyle onClick={changeShowAddVisibility} id="addButtonIcon">
        +
      </AddButtonStyle>
      <HelpButtonStyle onClick={changeShowHelpVisibility} id="helpButtonIcon">
        ?
      </HelpButtonStyle>
      <GenerationCounterStyle>
        Generation = {generationNumber}
      </GenerationCounterStyle>
    </GamePanelStyle>
  );
};

export default GamePanel;
