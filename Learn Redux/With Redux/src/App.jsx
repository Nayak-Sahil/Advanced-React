import React, { useState } from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { useSelector, useDispatch } from "react-redux";
import store from "./store/store";

function App() {
  // const todos = [{ id: new Date(), text: "Learn React", completed: false }, { id: new Date(), text: "Learn Firebase", completed: false }, { id: new Date(), text: "Learn GraphQL", completed: false }];

  // ! To get data from central store, we need to use useSelector hook from react-redux
  const todos = useSelector((state) => state.ToDosReducer);
  // const todos = store.getState().ToDosReducer;
  
  const dispatch = useDispatch();

  function handleToggleTodo(id) {
    dispatch({ type: "TOGGLE_TODO", payload: id });
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
  );
}

export default App;
