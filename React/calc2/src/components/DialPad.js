import React, { Component } from "react";
import Screen from "./Screen";
import "./dialPad.css";
export class DialPad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
      str: "",
    };
  }

  onPressOperation = (num) => {
    if (num !== "") {
      this.setState((prevState) => ({
        data: prevState.data + num,
      }));
    }
  };

  onPressNumber = (num) => {
    console.log(num);
    this.setState(
      (prevState) => ({
        ...prevState,
        data: prevState.data + num,
      }),
      console.log
    );
  };

  onPressExecute = () => {
    this.setState((prevState) => ({
      data: eval(prevState.data),
    }));
  };

  onPressClear = () => {
    this.setState({
      data: "",
    });
  };

  render() {
    return (
      <div className="dialPad">
        <Screen newData={this.state.data} />
        <div>
          <button onClick={() => this.onPressClear("C")}>C</button>
          <button onClick={() => this.onPressOperation("%")}>%</button>
          <button onClick={() => this.onPressOperation("d")}>del</button>
          <button onClick={() => this.onPressOperation("/")}>/</button>
        </div>

        <div>
          <button onClick={() => this.onPressNumber("7")}>7</button>
          <button onClick={() => this.onPressNumber("8")}>8</button>
          <button onClick={() => this.onPressNumber("9")}>9</button>
          <button onClick={() => this.onPressOperation("*")}>*</button>
        </div>

        <div>
          <button onClick={() => this.onPressNumber("4")}>4</button>
          <button onClick={() => this.onPressNumber("5")}>5</button>
          <button onClick={() => this.onPressNumber("6")}>6</button>
          <button onClick={() => this.onPressOperation("-")}>-</button>
        </div>

        <div>
          <button onClick={() => this.onPressNumber("1")}>1</button>
          <button onClick={() => this.onPressNumber("2")}>2</button>
          <button onClick={() => this.onPressNumber("3")}>3</button>
          <button onClick={() => this.onPressOperation("+")}>+</button>
        </div>

        <div>
          <button onClick={() => this.onPressNumber("00")}>00</button>
          <button onClick={() => this.onPressNumber("0")}>0</button>
          <button onClick={() => this.onPressNumber(".")}>.</button>
          <button onClick={() => this.onPressExecute("=")}>=</button>
        </div>
      </div>
    );
  }
}

export default DialPad;
