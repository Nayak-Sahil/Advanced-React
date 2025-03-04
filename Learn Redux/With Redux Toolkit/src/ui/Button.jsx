import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../slices/ToDoSlice";

export default function Button() {

  const dispatch = useDispatch();

  const todoText = useSelector((state)=> state.inputs);

  function handleClick() {
    dispatch(addTodo({id: new Date().getMilliseconds(), text: todoText, completed: false}));
  }

  return <button onClick={handleClick}>Add Todo</button>;
}
