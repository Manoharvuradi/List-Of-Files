import React, { Component } from "react";

export class ShuffleNumbers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arr: [],
      sourceState: this.getDataFromSource(),
    };
    this.getDataFromSource = this.getDataFromSource.bind(this);
  }
  getDataFromSource(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  render() {
    while (this.state.arr.length < 10) {
      let rand = this.getDataFromSource(0, 9);
      if (!this.state.arr.includes(rand)) {
        this.setState({
          arr: this.state.arr.push(rand),
        });
      }
    }
    console.log(this.state.arr);
    return <div></div>;
  }
}

export default ShuffleNumbers;
