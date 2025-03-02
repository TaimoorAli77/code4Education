import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count btn
      </button>
      <br></br>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Clear
      </button>
    </>
  );
};

export default Counter;
