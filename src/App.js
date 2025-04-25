import React, { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent';

const App = () => {

  const [count, setCount] = useState(0);
  console.log("Parent rendered!")
  const [count2, setCount2] = useState(0)

  const IncrementBtn = useCallback(
    () => {
      setCount2((precount) => precount + 1);
      console.log("useCallback hook")
    },
    [],
  );
  return (
    <div>
      <h1>useCallback hook </h1>
      {/* Example 1 */}
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <br />
      <ChildComponent Increment={IncrementBtn} />
      <h2>Count 2 : {count2} </h2>


    </div>
  )
}

export default App
