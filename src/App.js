import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className='checkmate'>

        {toggle ? <div className='status'>Content</div> : null}
        <button onClick={() => { setToggle(!toggle) }}>Toggle</button>
      </div>
    </>
  )
}

export default App
