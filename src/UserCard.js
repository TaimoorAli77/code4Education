import React from 'react'

const UserCard = (data) => {
  // console.log(props)
  console.log(data)
  return (
    <>
      {/* <h3>Hello {props.fname} {props.lname}</h3> */}
      <h2>Welcome to Mosque</h2>
      <div index={data.index}>
        <h5>Name: {data.name}</h5>
        <h5>Age: {data.age}</h5>
        <h5>Email: {data.email}</h5>
        <h5>Date: {data.date}</h5>
      </div>
    </>
  )
}

export default UserCard
