import React from "react";
import { useDispatch } from "react-redux";

export default function Input() {

  const dispatch = useDispatch();

  return (
    <input
      type="text"
      style={{ marginBottom: "10px", padding: "5px" }}
      onChange={(e) => dispatch({type: "ADD_Text", payload: e.target.value})}
    />
  );
}
