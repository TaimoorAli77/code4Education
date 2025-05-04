import React, { useContext } from "react";
import { chidAccessContextData, MyContext } from "./App";
export default function NewChild() {
  const { sharedData, newChildData } = useContext(chidAccessContextData);
  const check = useContext(MyContext);
  return (
    <div>
      <h2>new child</h2>
      {newChildData}
      <br />
      {sharedData}
      <br />
      {check}
    </div>
  );
}
