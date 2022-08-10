import React from "react";
import { useState, useEffect } from "react";

function TodoInput({ createTodo, updateTodo, editTodo }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(editTodo ? editTodo.title : "");
  }, [editTodo]);

  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  const onClick = () => {
    if (editTodo) {
      const updatedTodo = { ...editTodo, title: value };
      updateTodo(updatedTodo);
      setValue("");
    } else {
      createTodo(value);
      setValue("");
    }
  };

  return (
    <div className="todo-input-container">
      <input value={value} onChange={onInputChange} />
      <button onClick={onClick}>{editTodo ? "Update" : "Create"}</button>
    </div>
  );
}

export default TodoInput;
