import React, { useEffect } from 'react'

const UserTotal = (props) => {
  useEffect(() => {
    console.log("UserTotal ")
  },[]);
  useEffect(() => {
  console.log('Props & counting...')
  }, [props.count,props.total])
  return (
    <div>
      <h1>User Total</h1>
      <h2>{props.count}</h2>
      <h2>{props.total}</h2>
    </div>
  )
}

export default UserTotal
