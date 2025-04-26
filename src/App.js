import React, { useState } from 'react'
import Counter from './Counter';

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>useReducer hook </h1>
      <h3>Count : {count}</h3>
      <button onClick={() => { setCount(count + 1) }}>Increment</button>
      <button onClick={() => { setCount(count - 1) }}>Decrement</button>

      <Counter />

    </div>
  )
}

export default App
