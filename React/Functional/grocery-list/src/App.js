import React, { useState } from "react";
import DisplayGroceryItems from "./DisplayGroceryItems";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [obj, setObj] = useState({});
  const [id, setId] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // setObj({  });
    setObj({ id, ...obj, [name]: value });
  };
  const handleClick = () => {
    setId(id + 1);
    console.log(id);
    setList([...list, obj]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(obj);
    console.log(list);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="grocery"
          placeholder="Grocery name"
          onChange={handleChange}
        />
        <input
          type="number"
          name="rate"
          placeholder="rate"
          onChange={handleChange}
        />
        <input
          type="number"
          name="quantity"
          placeholder="quantity"
          onChange={handleChange}
        />
        <button type="submit" onClick={handleClick}>
          Add
        </button>
      </form>
      {list.length > 0 ? <DisplayGroceryItems list={list} /> : ""}
    </div>
  );
}

export default App;
