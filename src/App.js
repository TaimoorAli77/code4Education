import React, { useState } from 'react';
import './App.css'
const App = () => {
  const [inputValue, setInputValue] = useState("")
  const [finalValue, setFinalValue] = useState("")

  const data = (event) => {
    console.log(event.target.value)
    setInputValue(event.target.value)
  }
  return (
    <>
      <div className='App'>
        <h1>{inputValue}</h1>
        <input type='text' onChange={data} />
        <button onClick={() => { setFinalValue(inputValue) }}>click to show</button>
        <h1>{finalValue}</h1>
      </div>

    </>
  );
}

export default App;
