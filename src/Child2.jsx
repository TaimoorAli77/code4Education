import React, { useContext } from "react";
import { MyContext } from "./App";
export default function Child2() {
  const sharedData = useContext(MyContext);
  console.log(sharedData);
  return (
    <div>
      <h2>Child 2 Component</h2>
      {sharedData}
    </div>
  );
}
