import React, { memo } from "react";

const ChildComponent = ({ Increment }) => {
  console.log("child comp");
  return (
    <div>
      <h2>child component</h2>
      <button onClick={Increment}>click</button>
    </div>
  );
};

export default memo(ChildComponent);
