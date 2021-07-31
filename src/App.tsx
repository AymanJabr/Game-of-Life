import React from "react";
import GameControls from "./components/GameControls";
import GamePanel from "./components/GamePanel";
import HelpWindowContainer from "./components/HelpWindowContainer";
import NewGameWindowContainer from "./components/NewGameWindowContainer";
import "./index.css";

function App() {
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
