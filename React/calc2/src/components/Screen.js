import React, { Component } from "react";
import "./screen.css";
export class Screen extends Component {
  render() {
    const { newData } = this.props;
    return (
      <div className="screen">
        <div className="display">{newData}</div>
      </div>
    );
  }
}

export default Screen;
