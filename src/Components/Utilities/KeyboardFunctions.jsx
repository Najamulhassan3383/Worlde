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
  // if (words.has(word)) {
  if (currentAttemp.attempt === 5) {
    alert("You have reached the end of the board");
  } else if (currentAttemp.letterPosition !== 5) {
    alert("Please fill the word");
  } else if (currentAttemp.attempt !== 5) {
    setCurrentAttemp({
      ...currentAttemp,
      attempt: currentAttemp.attempt + 1,
      letterPosition: 0,
    });
  }
  // } else {
  //   alert("This is not a word");
  // }
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
