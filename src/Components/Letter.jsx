import { useContext } from "react";
import { LevelContext } from "./Context";

function Letter(props) {
  let { board } = useContext(LevelContext);
  return <div className="letter">{board[props.attempt][props.pos]}</div>;
}

export default Letter;
