import { useContext } from "react";
import { LevelContext } from "./Context";

function Key(props) {
  const { board, setBoard, currentAttemp, setCurrentAttemp } =
    useContext(LevelContext);

  const selectLetter = () => {
    let letter = props.keyvalue;
    letter = letter.trim();
    if (letter == "Enter") {
      if (currentAttemp.letterPosition !== 5) {
        alert(currentAttemp.letterPosition);
        alert("Please fill the word");
      } else if (currentAttemp.attempt !== 4) {
        setCurrentAttemp({
          attempt: currentAttemp.attempt + 1,
          letterPosition: 0,
        });
      } else {
        alert("You have completed the level");
      }
    } else if (letter == "Backspace") {
      if (currentAttemp.letterPosition !== 0) {
        const currentBoard = [...board];
        currentBoard[currentAttemp.attempt][currentAttemp.letterPosition - 1] =
          "";
        setBoard(currentBoard);
        setCurrentAttemp({
          attempt: currentAttemp.attempt,
          letterPosition: currentAttemp.letterPosition - 1,
        });
      } else if (currentAttemp.attempt !== 0) {
        alert("you can't go back to the previous word");
      }
    } else {
      if (currentAttemp.letterPosition === 5) {
        return;
      }
      const currentBoard = [...board];

      currentBoard[currentAttemp.attempt][currentAttemp.letterPosition] =
        letter;
      setBoard(currentBoard);

      setCurrentAttemp({
        attempt: currentAttemp.attempt,
        letterPosition: currentAttemp.letterPosition + 1,
      });
    }
  };

  return (
    <div
      className="key"
      id={props.big ? "big" : ""}
      key={props.keyvalue}
      onClick={selectLetter}
    >
      {props.keyvalue}
    </div>
  );
}

export default Key;
