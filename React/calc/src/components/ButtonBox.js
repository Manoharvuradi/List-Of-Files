import React, { Component } from "react";
import Buttons from "./Buttons";
import "./buttonBox.css";
export class ButtonBox extends Component {
  render() {
    return (
      <div className="button-box">
        <Buttons />
      </div>
    );
  }
}

export default ButtonBox;
