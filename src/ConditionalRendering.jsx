import React from "react";
import Button from "./Button";

const ConditionalRendering = () => {
  //  Example 1
  const isLoggedIn = true;
  //Example 2
  const fruits = ["Apple", "Banana", "Orange"];
  console.log(fruits.length);
  //Example 3
  const isAuthenticated = true;
  return (
    <>
      <h1>Profile</h1>
      {/* Example 1  */}
      {isLoggedIn ? <h3>Welcome Admin</h3> : <h3>Welcome User</h3>}

      {/* Example 2 */}
      <div>
        {fruits.length > 0 ? (
          <ol>
            {fruits.map((items, i) => (
              <li key={i}>{items}</li>
            ))}
          </ol>
        ) : (
          <p>No data!</p>
        )}
      </div>
      {/* Example 3 */}
      <div>
        {isAuthenticated && (
          <button
            onClick={() => {
              console.log("Logout!");
            }}
          >
            Logout
          </button>
        )}
      </div>
    </>
  );
};

export default ConditionalRendering;
