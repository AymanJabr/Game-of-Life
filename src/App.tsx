import React from "react";
import GameControls from "./components/GameControls";
import GamePanel from "./components/GamePanel";
import HelpWindowContainer from "./components/HelpWindowContainer";
import NewGameWindowContainer from "./components/NewGameWindowContainer";
import "./index.css";

type AppProps = {
};

const App: React.FunctionComponent<AppProps> = () => {

  return (
    <div className="App">
      <GamePanel />
      
      <HelpWindowContainer />
      <NewGameWindowContainer />

      <GameControls />
    </div>
  );
}

export default App;
