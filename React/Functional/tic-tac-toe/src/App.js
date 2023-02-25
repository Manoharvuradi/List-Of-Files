import React, { useState } from "react";
import "./App.css";

function App() {
  const [btn, setBtn] = useState(Array(9).fill(null));
  const [mark, setMark] = useState("X");

  const calculateWinner = () => {
    let matrix = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < matrix.length; i++) {
      const [a, b, c] = matrix[i];
      if (btn[a] && btn[a] === btn[b] && btn[a] === btn[c]) {
        console.log(btn[a]);
        return btn[a];
      }
    }
    return null;
  };
  const isWinner = calculateWinner();
  console.log(isWinner);
  const handleFillUp = (index) => {
    if (isWinner) {
      return;
    }
    const checkBoard = [...btn];
    if (btn[index] === null) {
      checkBoard[index] = mark;
      setBtn(checkBoard);
      {
        mark === "X" ? setMark("O") : setMark("X");
      }
    }
  };
  return (
    <div className="App">
      {isWinner ? "Game Over!!!" : mark === "X" ? "Turn:X" : "Turn:O"}
      {btn.map((b, index) => {
        return (
          <button key={index} onClick={() => handleFillUp(index)}>
            {b}
          </button>
        );
      })}
      {isWinner ? isWinner + "is the winner" : null}
    </div>
  );
}

export default App;
