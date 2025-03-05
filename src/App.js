import React, { useState } from 'react'
import './App.css'
import Users from './Users'
const App = () => {

  const [count, setCount] = useState(0)

  const countHandler = () => {
    setCount(count + 1);
    console.log(count)
  }
  const handleButtonClick = () => {
    console.log("Btn clicked !")
  }

  return (
    <>
      <div className='checkmate'>
        <h1>Pass Functions as a Props</h1>
        <Users click={handleButtonClick} count={countHandler} counter={count}></Users>
      </div>
    </>
  )
}

export default App
