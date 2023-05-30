import { onDelete, onEnter, OnLetter } from "./Utilities/KeyboardFunctions";
import PropTypes from "prop-types";
import { useContext } from "react";
import { LevelContext } from "./Context";

function Key({ keyvalue, big }) {
  const { board, setBoard, currentAttemp, setCurrentAttemp } =
    useContext(LevelContext);
  const selectLetter = () => {
    let letter = keyvalue;
    letter = letter.trim();
    if (letter == "Enter") {
      onEnter(board, setBoard, currentAttemp, setCurrentAttemp);
    } else if (letter == "Backspace") {
      onDelete(board, setBoard, currentAttemp, setCurrentAttemp);
    } else {
      OnLetter(letter, board, setBoard, currentAttemp, setCurrentAttemp);
    }
  };

  return (
    <div
      className="key"
      id={big ? "big" : ""}
      key={keyvalue}
      onClick={selectLetter}
    >
      {keyvalue}
    </div>
  );
}

export default Key;

Key.propTypes = {
  keyvalue: PropTypes.string.isRequired,
  big: PropTypes.bool,
};
