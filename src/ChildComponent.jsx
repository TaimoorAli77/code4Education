import React from "react";

const ChildComponent = ({ sharedData, changeData }) => {
  const change = (e) => {
    const value = e.target.value;
    changeData(value);
  };
  return (
    <>
      <h2>Child Component</h2>

      <input value={sharedData} onChange={change}></input>
      <h2>{sharedData}</h2>
    </>
  );
};

export default ChildComponent;
