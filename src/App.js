import React, { useState, useMemo } from 'react';

const App = () => {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)

  const [count, setCount] = useState(0)

  const sum = useMemo(() => {
    console.log("Calculating Sum ...")
    let sum = num1 + num2
    return sum
  }, [num1, num2])

  return (
    <>
      <h1>useMemo in React JS</h1>
      <input type="number" value={num1} onChange={(e) => { setNum1(Number(e.target.value)) }} />
      <input type="number" value={num2} onChange={(e) => { setNum2(Number(e.target.value)) }} />
      <h1>sum : {sum}</h1>
      {/* if we don't pass props then it will not rerender that */}
      <button onClick={() => { setCount(count + 1) }}>Increment</button>
      <h3>
        {count}

      </h3>
    </>
  );
}

export default App;
