import Key from "./Key";
import { useEffect, useCallback } from "react";
import { useContext } from "react";
import { LevelContext } from "./Context";

function Keyboard() {
  const keysLine1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const keysLine2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const keysLine3 = ["z", "x", "c", "v", "b", "n", "m"];
  const {
    onEnter,
    onDelete,
    OnLetter,
    board,
    setBoard,
    currentAttemp,
    setCurrentAttemp,
  } = useContext(LevelContext);

  const hanldeKeyPress = useCallback((e) => {
    let letter = e.key;
    letter = letter.trim();
    letter = letter.toLowerCase();
    if (letter == "Enter") {
      onEnter(board, setBoard, currentAttemp, setCurrentAttemp);
    } else if (letter == "Backspace") {
      onDelete(board, setBoard, currentAttemp, setCurrentAttemp);
    } else {
      //check if the key pressed is a letter
      const isAlphabetKey = /^[a-zA-Z]$/.test(e.key);
      if (!isAlphabetKey) return;
      OnLetter(letter, board, setBoard, currentAttemp, setCurrentAttemp);
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", hanldeKeyPress);
    return () => {
      document.removeEventListener("keydown", hanldeKeyPress);
    };
  }, [hanldeKeyPress]);

  return (
    <div className="keyboard" onKeyDown={hanldeKeyPress}>
      <div className="line1">
        {keysLine1.map((key) => (
          <Key keyvalue={key} key={key} />
        ))}
      </div>
      <div className="line2">
        {keysLine2.map((key) => (
          <Key keyvalue={key} key={key} />
        ))}
      </div>
      <div className="line3">
        <Key keyvalue="Enter " big={true} />
        {keysLine3.map((key) => (
          <Key keyvalue={key} key={key} />
        ))}
        <Key keyvalue="Backspace" big={true} />
      </div>
    </div>
  );
}

export default Keyboard;
