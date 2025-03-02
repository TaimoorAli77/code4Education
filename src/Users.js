import React from 'react';

export default function Users() {
  function common(){
    return(<h3>Hello common function</h3>)
  }
  return (<div>
    <NUsers />
    <NewCustomer />
    {3*3}
    <p>
      no need to export above those functions because they are already here
    </p>
    {common()}
    <common />
  </div>);
}

export function NUsers() {
  return (
    <h1>
      Functional Component
    </h1>
  );
}



export function NewCustomer() {
  return (
    <h2>This is used to call multiple functions and here we don't use default</h2>
  );
}

