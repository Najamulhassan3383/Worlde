import { useContext } from "react";
import { LevelContext } from "./Context";
import PropTypes from "prop-types";

function Letter(props) {
  let { board, LetterToBe, currentAttemp } = useContext(LevelContext);
  const letter = board[props.attempt][props.pos];

  const correctLetter = LetterToBe[props.pos] == letter;
  const almostCorrectLetter =
    !correctLetter && letter !== "" && LetterToBe.includes(letter);
  const wrongLetter = !correctLetter && !almostCorrectLetter && letter !== "";

  let id;

  if (props.attempt == currentAttemp.attempt) {
    id = "still";
  } else if (correctLetter) {
    id = "correct";
  } else if (almostCorrectLetter) {
    id = "almost";
  } else if (wrongLetter) {
    id = "error";
  }

  return (
    <div className="letter" id={id}>
      {letter}
    </div>
  );
}

export default Letter;

Letter.propTypes = {
  attempt: PropTypes.number.isRequired,
  pos: PropTypes.number.isRequired,
};
