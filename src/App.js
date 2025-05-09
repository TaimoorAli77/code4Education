import React, { useState, useTransition, useEffect } from 'react'

const App = () => {
  const [isPending, startTransition] = useTransition()
  const [count, setCount] = useState(0);

  // useEffect Ex 1
  useEffect(() => {
    console.log("useState run...")
  },[count]);

  const handleClick = () => {
    startTransition(() => {
      setCount(count + 1)
      console.log("handle click runs...")
    })
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>useTransition Hook </h1>

      <h2>count: {count}</h2>
      <button onClick={handleClick}>Update Count</button>
    </div>
  )
}

export default App
