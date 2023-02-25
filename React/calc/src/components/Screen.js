import React, { Component } from "react";
import "./screen.css";
export class Screen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }
  handleChange = ({ num }) => {
    this.setState({
      value: num,
    });
  };
  render() {
    console.log(this.props.num);
    return (
      <div className="screen">
        <div className="display">
          <input
            value={this.props.num}
            type="text"
            id="userInputValue"
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default Screen;
