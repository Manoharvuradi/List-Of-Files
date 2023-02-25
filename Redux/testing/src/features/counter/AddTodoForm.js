import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./features/counter/index.js";
function AddTodoForm() {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      useDispatch(addTodo);
    }
  };
  return (
    <div className="addTodoForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit"></button>
      </form>
    </div>
  );
}

export default AddTodoForm;
