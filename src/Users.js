import React from 'react';

const Users = (props) => {
  // console.log(props)
  return (
    <>
      <h1>User</h1>
      <button onClick={props.click}>click me</button>
      <button onClick={props.count}>Count me</button>
      <h3>{props.counter}</h3>
    </>
  );
}

export default Users;
