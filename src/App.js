import React, { useEffect, useState } from 'react'
import './App.css'
import UserTotal from './UserTotal'
const App = () => {
  // {/* Example 2 */ }
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(100)

  //Example 1 (On every render, UseEffect Will run)
  useEffect(() => {
    console.log("After Render!")
    // alert("UseEffect Hook")
    // console.log("UseEffect Hook")
    // console.log("Updating...")
    //without dependency it will run on each render 
  })
  useEffect(() => {
    console.log("After Render with []...")
    //with dependency empty brackets [] it will run once or single render occurs 
  }, [])
  useEffect(() => {
    // console.log("After Render with [count] dependency...")
    //with dependency empty brackets [] it will run once or single render occurs 
  }, [count])
  useEffect(() => {
    // console.log("After Render with [total] dependency...")
    //with dependency empty brackets [] it will run once or single render occurs 
  }, [total])
  return (
    <div className='App'>
      <h1>UseEffect Hook</h1>
      {/* Example 2 */}
      <button onClick={() => { setCount(count + 1) }}>Update Count:</button>
      <h3>
        {/* {count} */}
      </h3>
      <h1>UseEffect With Conditions</h1>
      {/* //Example */}
      <button onClick={() => { setTotal(total + 1) }}>Update Total:</button>
      <h3>
        {/* {total} */}
      </h3>
      <UserTotal total={total} count={count}/>
    </div>
  )
}

export default App
