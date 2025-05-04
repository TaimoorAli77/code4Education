import React from "react";
import { MyContext, MyNewContext } from "./App";
export default function Child2() {
  // const sharedData = useContext(MyContext);
  // console.log(sharedData);
  return (
    <div>
      <h2>Child 2 Component</h2>
      {/* In Context api you use consumer instead of useContext */}
      <MyContext.Consumer>
        {(sharedData) => {
          return (
            <MyNewContext.Consumer>
              {(newData) => {
                return (
                  <p>
                    {sharedData} : {newData}
                  </p>
                );
              }}
            </MyNewContext.Consumer>
          );
        }}
      </MyContext.Consumer>
      {/* {sharedData} */}
    </div>
  );
}
