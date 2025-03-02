import React from "react";
import { useState } from "react";
const Button = () => {
  const [data, setData] = useState("Taimoor Malik");
  const btn = () => {
    setData("Code for future!");
    alert(data);
  };
  console.log("render...");
  return (
    <>
      <h5>{data}</h5>
      <button onClick={btn}>Click me to change!</button>
      <button
        onClick={() => {
          alert("Welcome back");
        }}
      >
        Now Click
      </button>
    </>
  );
};

export default Button;
