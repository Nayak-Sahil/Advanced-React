import React from "react";
import { useDispatch } from "react-redux";
import { setInput } from "../slices/InputSlice";

export default function Input() {

  const dispatch = useDispatch();

  return (
    <input
      type="text"
      style={{ marginBottom: "10px", padding: "5px" }}
      onChange={(e) => dispatch(setInput(e.target.value))}
    />
  );
}
