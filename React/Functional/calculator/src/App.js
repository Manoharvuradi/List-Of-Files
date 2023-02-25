import React, { useEffect, useState } from "react";
import Screen from "./Screen";
import "./App.css";

function App() {
  const operators = ["C", "%", "d", "/", "*", "-", "+", "="];
  const [data, setData] = useState("");
  // const shuffle = [];
  const [shuffle, setShuffle] = useState([]);

  const getDataFromSource = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  while (shuffle.length < 10) {
    let random = getDataFromSource(0, 9);
    if (shuffle.indexOf(random) === -1) {
      shuffle.push(random);
    }
  }
  console.log(shuffle);

  const OnPressButton = (key) => {
    const onPressClear = () => {
      setData("");
    };
    const onPressExecute = (key) => {
      setData(eval(data));

      // if (onPressNumber(key)) {
      //   setData("");
      // }
    };
    const onPressOperation = (key) => {
      setData(data + key);
    };

    const onPressDel = () => {
      setData(data.slice(0, -1));
    };

    switch (key) {
      case "C":
        return onPressClear(key);
      case "=":
        return onPressExecute(key);
      case "d":
        return onPressDel(key);
      default:
        return onPressOperation(key);
    }
  };
  console.log(data);

  const onPressNumber = (key) => {
    setData(data + key);
  };

  return (
    <div className="App">
      <Screen data={data} />
      <div className="grid">
        {operators.map((operand, index) => {
          return (
            <button key={index} onClick={() => OnPressButton(operand)}>
              {operand}
            </button>
          );
        })}
        {shuffle.map((num, index) => {
          return (
            <button key={index} onClick={() => onPressNumber(num)}>
              {num}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
