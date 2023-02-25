import React from "react";
import "./Grocery.css"
import DisplayGroceryItems from "./DisplayGroceryItems";
export default class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {},
      list: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (event) => {
    const { name, value } = event.target; //getting the name and value of the input field
    this.setState((prevState) => ({
      obj: {
        ...prevState.obj,
        [name]: value
      }
    }));
  };

  handleClickEvent = (event) => {
    this.setState((prevState) => ({
      // ...prevState,
      list: [...prevState.list, this.state.obj]
    }));
  };

  handleSubmit = (e) => {
    console.log(this.state.obj);
    console.log(this.state.list);
    e.preventDefault();
  };
  render() {
    return (
      <div className="grocery">
        <div className="logo"><h1>Grocery List</h1></div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="grocery"
            value={this.state.value}
            placeholder="Enter grocery Name"
            onChange={this.handleChange}
            autofocus
          />
          <br />
          <input
            type="number"
            name="rate"
            value={this.state.value}
            placeholder="Enter rs pkg"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="number"
            name="quantity"
            value={this.state.value}
            placeholder="quantity"
            onChange={this.handleChange}
          />
          <br />
           <div className="btn">
                <input type="reset" defaultValue="Reset" className="reset"/>

                <button type="submit" onClick={this.handleClickEvent}>
                    Add
                </button>
           </div>
        </form>
        {this.state.list.length>0?<DisplayGroceryItems list={this.state.list} />:""}
      </div>
    );
  }
}
