import Key from "./Key";

function Keyboard() {
  const keysLine1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const keysLine2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const keysLine3 = ["z", "x", "c", "v", "b", "n", "m"];
  return (
    <div className="keyboard">
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
