import React, { useState } from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";

function App() {
  // const todos = [{ id: new Date(), text: "Learn React", completed: false }, { id: new Date(), text: "Learn Firebase", completed: false }, { id: new Date(), text: "Learn GraphQL", completed: false }];

  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  function handleToggleTodo(id) {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }));
  }

  return (
    <div style={{display: "flex", flexDirection: "column", padding: "10px 55px", width: "200px", margin: "auto"}}>
      <h1>Todos</h1>
      <p>Here your todos go.</p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => handleToggleTodo(todo.id)}>
            {todo.completed ? <del>{todo.text}</del> : todo.text}
          </li>
        ))}
      </ul>

      <Input handleState={setTodoText} />
      <Button addTodo={setTodos} todoText={todoText} />
    </div>
  );
}

export default App;
