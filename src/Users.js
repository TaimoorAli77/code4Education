import React from 'react';

export default function Users() {
  function NewCommon() {
    return (<>Hello common function</>)
  }
  return (<>
    <NUsers />
    <NewCustomer />
    {3 * 3}
    <p>
      no need to export above those functions because they are already here
    </p>
    {NewCommon()}
    <NewCommon />
  </>);
}

export function NUsers() {
  return (
    <>
      Functional Component
    </>
  );
}



export function NewCustomer() {
  return (
    <h2>This is used to call multiple functions and here we don't use default</h2>
  );
}

