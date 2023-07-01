//this is going to be the component that will display the words that the user has added to their list

//this is the intial state of the board that will be displayed that is empty words (matrix)
import wordBank from "../assets/wordle-bank.txt";

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

const generateWords = async () => {
  let wordSet;
  await fetch(wordBank)
    .then((r) => r.text())
    .then((text) => {
      const wordArr = text.split("\n");
      wordSet = new Set(wordArr);
    });
  return { wordSet };
};
export default generateWords;
