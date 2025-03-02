import React from "react";

const Button = () => {
  let data = "coder";
  const btn = () => {
    data = "Code for future!";
    alert(data);
  };
  return (
    <div>
      <button onClick={btn}>Click me!</button>
      <h5>{data}</h5>
      <button
        onClick={() => {
          alert("Welcome back");
        }}
      >
        Now Click
      </button>
    </div>
  );
};

export default Button;
