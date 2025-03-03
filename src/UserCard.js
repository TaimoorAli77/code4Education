import React from 'react'

const UserCard = (props) => {
  // console.log(props)
  console.log(props)
  return (
    <>
      {/* <h3>Hello {props.fname} {props.lname}</h3> */}
      {/* <h2>Welcome to Mosque</h2>
      <div index={data.index}>
        <h5>Name: {data.name}</h5>
        <h5>Age: {data.age}</h5>
        <h5>Email: {data.email}</h5>
        <h5>Date: {data.date}</h5>
      </div> */}
      <h2>Hi {props.name}</h2>
    </>
  )
}

export default UserCard
