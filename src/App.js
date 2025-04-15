import React, { useState } from 'react'

const App = () => {

  // Higher Order Component
  const withCounter = (wrappedComponent) => {
    return function WithCounter(props) {
      const [count, setCount] = useState(0);
      const Increment = () => {
        setCount(count + 1)
      }
      return <wrappedComponent {...props} count={count} increment={Increment} />

    }
  }


  // Functional component

  const Counter = ({ count, increment }) => {
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>

    )
  }


  // Wrap counter component with the  withCounter HOC

  const counterWithEnhance =  withCounter(Counter);

  return (
    <div>
      <h1>HOC - higher order component </h1>
      {/* Example 1 */}
      {/* <h2>Count: {count}</h2> */}
      {/* <button onClick={()=>setCount(count+1)}>Update Count</button> */}
      {/* Example 2 */}
      <counterWithEnhance />
    </div>
  )
}

export default App
