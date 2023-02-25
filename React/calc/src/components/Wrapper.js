import React, { Component } from "react";
import Screen from "./Screen";
import ButtonBox from "./ButtonBox";
import "./wrapper.css";
export class Wrapper extends Component {
  render() {
    return (
      <div className="wrapper">
        <ButtonBox />
      </div>
    );
  }
}

export default Wrapper;
