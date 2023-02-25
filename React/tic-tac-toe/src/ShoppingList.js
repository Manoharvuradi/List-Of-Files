import React, { Component } from "react";

export class ShoppingList extends Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>ShoppingList for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Facebook</li>
        </ul>
      </div>
    );
  }
}

export default ShoppingList;
