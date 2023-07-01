import { onDelete, onEnter, OnLetter } from "./Utilities/KeyboardFunctions";
import PropTypes from "prop-types";
import { useContext } from "react";
import { LevelContext } from "./Context";
import generateWords from "../Components/Words";
import { useEffect } from "react";
import { useState } from "react";

function Key({ keyvalue, big }) {
  const [WordsSet, setWordSet] = useState(null);

  const { board, setBoard, currentAttemp, setCurrentAttemp } =
    useContext(LevelContext);

  useEffect(() => {
    generateWords().then((res) => {
      // console.log(res.wordSet);
      setWordSet(res);
    });
  }, []);
  const selectLetter = () => {
    console.log(WordsSet);
    let letter = keyvalue;
    letter = letter.trim();
    if (letter == "Enter") {
      let word = "";
      board[currentAttemp.attempt].forEach((letter) => {
        word += letter;
      });
      // console.log();
      alert(word);
      if (WordsSet.has(word)) {
        onEnter(board, setBoard, currentAttemp, setCurrentAttemp);
      } else {
        alert("This is not a word");
      }
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
