import "./App.css";
import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const [editTodo, setEditTodo] = useState(null);

  const createTodo = (title) => {
    const newTodo = {
      id: todos.length + 1,
      title,
      isComplete: false,
    };

    setTodos([...todos, newTodo]);
  };

  const updateTodo = (updatedTodo) => {
    let todosCopy = [...todos];
    todosCopy.splice(updatedTodo.id - 1, 1, updatedTodo);
    setTodos(todosCopy);
    setEditTodo(null);
  };

  const toggleStatus = (id) => {
    let todosCopy = [...todos];

    const filteredTodos = todos.filter((todo) => todo.id === id);

    const todo = filteredTodos[0];

    todo.isComplete = !todo.isComplete;

    todosCopy.splice(id - 1, 1, todo);

    setTodos(todosCopy);
  };

  const deleteTodo = (id) => {
    let todosCopy = [...todos];

    todosCopy.splice(id - 1, 1);

    setTodos(todosCopy);
  };

  return (
    <div className="container">
      <div className="todo-container">
        <h1 className="title">My Todos</h1>
        <TodoInput
          createTodo={createTodo}
          updateTodo={updateTodo}
          editTodo={editTodo}
        />
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleStatus={toggleStatus}
            deleteTodo={deleteTodo}
            setEditTodo={setEditTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
