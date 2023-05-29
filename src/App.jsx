import "./App.css";
import Board from "./Components/Board";
import Keyboard from "./Components/Keyboard";
import { LevelContext } from "./Components/Context";
import { boardDefault } from "./Components/Words";
import { useState } from "react";

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currentAttemp, setCurrentAttemp] = useState({
    attempt: 0,
    letterPosition: 0,
  });

  return (
    <LevelContext.Provider
      value={{ board, setBoard, currentAttemp, setCurrentAttemp }}
    >
      <div className="App">
        <nav>
          <h1>Worlde</h1>
        </nav>
        <Board />
        <Keyboard />
      </div>
    </LevelContext.Provider>
  );
}

export default App;
