import React from "react";

const ChildComponent = ({ sharedData, changeData }) => {
  const change = (e) => {
    const value = e.target.value;
    changeData(value);
  };
  return (
    <>
      <h2>Child Component</h2>

      {/* <Button onClick={change}>Click</Button> */}
      <input value={sharedData} onChange={change}></input>
    </>
  );
};

export default ChildComponent;
