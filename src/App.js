import React, { useEffect, useState, useDeferredValue } from 'react'
import List from './List'

const App = () => {
  const [input, setInput] = useState()
  const [count, setCount] = useState(0)
  const handleChange = (e) => {
    setInput(e.target.value)
  }
  let defferedValue = useDeferredValue(count)
  const updateCount = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    console.log(`count : ${count} \n Deffered Value : ${defferedValue}`);

  }, [count, defferedValue]);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>useDefferedValue Hook </h1>

      <input type="text" value={input} onChange={handleChange} />
      <List input={input} />
      <h3>Count : {count}</h3>
      <button onClick={updateCount}>update Count</button>
    </div>
  )
}

export default App
