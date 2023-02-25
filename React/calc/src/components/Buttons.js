import React, { Component } from "react";
import "./button.css";
import Screen from "./Screen";
export class Buttons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: "",
    };
  }
  handleClick = (num) => {
    // alert(num);
    this.setState({
      num: num,
    });
  };
  btn = ({ num }) => {
    return (
        <button onClick={() => this.handleClick(num)}>-</button>
    );
  };
  render() {
    // console.log(this.state.num);
    return (
      <>
        <Screen num={this.state.num} />
        <div className="buttons">
          <div className="inputs">
            <this.btn num={"C"} />
            <this.btn num={"%"} />
            <this.btn num={"del"} />
            <this.btn num={"/"} />
          </div>

          <div className="inputs">
            <this.btn num={"7"} />
            <this.btn num={"8"} />
            <this.btn num={"9"} />
            <this.btn num={"x"} />
          </div>

          <div className="inputs">
            <this.btn num={"4"} />
            <this.btn num={"5"} />
            <this.btn num={"6"} />
            <this.btn num={"-"} />
          </div>

          <div className="inputs">
            <this.btn num={"1"} />
            <this.btn num={"2"} />
            <this.btn num={"3"} />
            <this.btn num={"+"} />
          </div>

          <div className="inputs">
            <this.btn num={"00"} />
            <this.btn num={"0"} />
            <this.btn num={"."} />
            <this.btn num={"="} />
          </div>
          {/* <Screen forInput={this.num} /> */}
        </div>
      </>
    );
  }
}

export default Buttons;
