import React from "react";

function TodoItem({ toggleStatus, todo, deleteTodo, setEditTodo }) {
  const { id, isComplete, title } = todo;

  return (
    <div className="todo-item-container">
      <div style={isComplete ? { textDecoration: "line-through" } : {}}>
        {title}
      </div>
      <div>
        <button onClick={() => toggleStatus(id)}>
          {isComplete ? "Un Done" : "Done"}
        </button>
        <button disabled={isComplete} onClick={() => setEditTodo(todo)}>
          Edit
        </button>
        <button onClick={deleteTodo}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
