const onDelete = (board, setBoard, currentAttemp, setCurrentAttemp) => {
  if (currentAttemp.letterPosition !== 0) {
    const currentBoard = [...board];
    currentBoard[currentAttemp.attempt][currentAttemp.letterPosition - 1] = "";
    setBoard(currentBoard);
    setCurrentAttemp({
      ...currentAttemp,
      letterPosition: currentAttemp.letterPosition - 1,
    });
  } else if (currentAttemp.attempt !== 0) {
    alert("you can't go back to the previous word");
  }
};

const onEnter = (board, setBoard, currentAttemp, setCurrentAttemp) => {
  if (currentAttemp.letterPosition !== 5) {
    alert(currentAttemp.letterPosition);
    alert("Please fill the word");
  } else if (currentAttemp.attempt !== 4) {
    setCurrentAttemp({
      ...currentAttemp,
      attempt: currentAttemp.attempt + 1,
      letterPosition: 0,
    });
  } else {
    alert("You have completed the level");
  }
};

const OnLetter = (letter, board, setBoard, currentAttemp, setCurrentAttemp) => {
  if (currentAttemp.letterPosition === 5) {
    return;
  }
  const currentBoard = [...board];

  currentBoard[currentAttemp.attempt][currentAttemp.letterPosition] = letter;
  setBoard(currentBoard);

  setCurrentAttemp({
    ...currentAttemp,
    letterPosition: currentAttemp.letterPosition + 1,
  });
};

export { onDelete, onEnter, OnLetter };
