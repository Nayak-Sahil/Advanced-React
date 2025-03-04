import React from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { useSelector, useDispatch } from "react-redux";
import { markAsCompleted } from "./slices/ToDoSlice";

function App() {

  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  function handleToggleTodo(todoId) {
    dispatch(markAsCompleted(todoId));
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "10px 55px",
        width: "200px",
        margin: "auto",
      }}
    >
      <h1>Todos</h1>
      <p>Here your todos go.</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} onClick={() => handleToggleTodo(todo.id)}>
            {todo.completed ? <del>{todo.text}</del> : todo.text}
          </li>
        ))}
      </ul>

      <Input />
      <Button />
    </div>
  )
}

export default App
