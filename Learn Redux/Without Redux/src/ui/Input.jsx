import React from "react";

export default function Input({ handleState }) {
  return (
    <input
      type="text"
      style={{ marginBottom: "10px", padding: "5px" }}
      // value={}
      onChange={(e) => handleState(e.target.value)}
    />
  );
}
