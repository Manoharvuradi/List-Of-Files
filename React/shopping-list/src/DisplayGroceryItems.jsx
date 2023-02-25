import React from "react";
import "./DisplayGroceryItems.css"
export default function DisplayGroceryItems(props) {
  const data = props.list;
  
  const display = (
    <table className="table_format">
        <thead>
            <tr>
                <th>Grocery</th>
                <th>Rs</th>
                <th>Quantity</th>
                <th>Total</th>
            </tr>
        </thead>
        {data.map((item)=>{
        return(
            <tbody>
                <tr key={item.id}>
                    <td>{item.grocery}</td>
                    <td>{item.rate}rs</td>
                    <td>{item.quantity}kg</td>
                    <td>{parseInt(item.rate)*parseInt(item.quantity)}rs</td>
                </tr>
            </tbody>
        );
        })}
    </table>
  )
  return <div className="result">{display}</div>;
}