import React from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../store/store";

export default function Button() {

  const dispatch = useDispatch();

  const todoText = useSelector((state)=> state.InptReducer);
  // store.getState().InptReducer

  function handleClick() {
    dispatch({ type: "ADD_TODO", payload: todoText});
  }

  return <button onClick={handleClick}>Add Todo</button>;
}
