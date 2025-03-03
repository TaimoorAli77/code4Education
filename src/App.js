import React, { useState } from 'react';
import './App.css'
const App = () => {
  const [inputValue, setInputValue] = useState("")
  const [finalValue, setFinalValue] = useState(false)

  const data = (event) => {
    console.log(event.target.value)
    setInputValue(event.target.value)
    setFinalValue(false)
  }
  const Submit = () => {
    setFinalValue(true);

  }
  return (
    <>
      <div className='App'>
        <h1>{finalValue ? inputValue : ""}</h1>
        <input type='text' onChange={data} />
        <button onClick={() => { Submit() }}>click to show</button>
      </div>

    </>
  );
}

export default App;
