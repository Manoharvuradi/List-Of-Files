import React, { Component } from "react";
import Screen from "./Screen";

export class KeyPad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
      keyPadValues: [
        ["C", "%", "del", "/"],
        ["*", "-", "+", "="],
      ],
      numpad: [],
      sourceState: this.getDataFromSource(),
    };
    // this.getDataFromSource = this.getDataFromSource.bind(this);
    // this.randomizeNumpad = this.randomizeNumpad.bind(this);
  }

  componentDidMount() {
    this.randomizeNumpad();
  }

  randomizeNumpad = () => {
    const arr = [];
    while (arr.length < 10) {
      let rand = this.getDataFromSource(0, 9);
      console.log(arr.indexOf(rand));
      if (arr.indexOf(rand) === -1) {
        arr.push(rand);
      }
    }

    this.setState({
      numpad: arr,
    });
  };

  getDataFromSource(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  onPressClear = () => {
    this.setState({
      data: "",
    });
  };

  onPressExecute = () => {
    this.setState((prevState) => ({
      data: eval(prevState.data),
    }));
  };

  onPressOperation = (num) => {
    console.log(num);
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

  onPressButton = (key) => {
    switch (key) {
      case "C":
        return this.onPressClear(key);
      case "=":
        return this.onPressExecute(key);
      default:
        return this.onPressOperation(key);
    }
  };

  render() {
    return (
      <div>
        <Screen newData={this.state.data} />
        {this.state.keyPadValues.map((row, index) => {
          return (
            <div key={index}>
              {row.map((btn, i) => {
                return (
                  <button key={i} onClick={() => this.onPressButton(btn)}>
                    {btn}
                  </button>
                );
              })}
            </div>
          );
        })}
        {this.state.numpad.map((btn, i) => {
          return (
            <button key={i} onClick={() => this.onPressNumber(btn)}>
              {btn}
            </button>
          );
        })}
      </div>
    );
  }
}

export default KeyPad;
