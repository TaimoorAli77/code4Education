import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const App = () => {
  const [count, setCount] = useState(0)


  console.log("Parent Component rendered!")
  return (
    <>
      <h1>Memo in React JS</h1>
      <ChildComponent count={count} />
      {/* if we don't pass props then it will not rerender that */}
      <button onClick={() => { setCount(count + 1) }}>Increment</button>
      <h3>
        {/* {count} */}

      </h3>
    </>
  );
}

export default App;
