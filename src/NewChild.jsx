import React, { useContext } from "react";
import { chidAccessContextData } from "./App";
export default function NewChild() {
  const myNewData = useContext(chidAccessContextData);
  return (
    <div>
      <h2>new child</h2>
      {myNewData}
    </div>
  );
}
