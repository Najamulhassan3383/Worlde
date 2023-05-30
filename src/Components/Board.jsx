import Letter from "./Letter";

function Board() {
  //this is the state of the board that will be displayed
  //which represents the words that are typed in by the user

  return (
    <div className="board">
      <div className="row">
        <Letter pos={0} attempt={0} />
        <Letter pos={1} attempt={0} />
        <Letter pos={2} attempt={0} />
        <Letter pos={3} attempt={0} />
        <Letter pos={4} attempt={0} />
      </div>
      <div className="row">
        <Letter pos={0} attempt={1} />
        <Letter pos={1} attempt={1} />
        <Letter pos={2} attempt={1} />
        <Letter pos={3} attempt={1} />
        <Letter pos={4} attempt={1} />
      </div>
      <div className="row">
        <Letter pos={0} attempt={2} />
        <Letter pos={1} attempt={2} />
        <Letter pos={2} attempt={2} />
        <Letter pos={3} attempt={2} />
        <Letter pos={4} attempt={2} />
      </div>
      <div className="row">
        <Letter pos={0} attempt={3} />
        <Letter pos={1} attempt={3} />
        <Letter pos={2} attempt={3} />
        <Letter pos={3} attempt={3} />
        <Letter pos={4} attempt={3} />
      </div>
      <div className="row">
        <Letter pos={0} attempt={4} />
        <Letter pos={1} attempt={4} />
        <Letter pos={2} attempt={4} />
        <Letter pos={3} attempt={4} />
        <Letter pos={4} attempt={4} />
      </div>
    </div>
  );
}

export default Board;
