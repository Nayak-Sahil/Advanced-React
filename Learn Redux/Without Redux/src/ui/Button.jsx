import React from "react";

export default function Button({ addTodo, todoText }) {
  function handleClick() {
    addTodo((prevTodos) => {
      return [
        ...prevTodos,
        { id: new Date(), text: todoText, completed: false },
      ];
    });
  }

  return <button onClick={handleClick}>Add Todo</button>;
}
