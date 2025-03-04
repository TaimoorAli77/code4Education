import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className='checkmate'>
        <h1>Show Hide Toggle</h1>
        {toggle ? <div className='status'>Content</div> : null}
        <button onClick={() => { setToggle(!toggle) }}>Toggle</button>
      </div>
    </>
  )
}

export default App
