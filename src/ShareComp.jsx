import React from "react";

const ShareComp = ({ d, alert }) => {
  // const data = "Taimoor";
  const data = { name: "Taimoor Ali", email: "Taimoorali083@gmail.com" };
  return (
    <div>
      {/* <h1>{d}</h1> */}
      <button onClick={() => alert(data)}>Click me</button>
    </div>
  );
};

export default ShareComp;
