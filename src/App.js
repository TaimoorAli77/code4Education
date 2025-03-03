import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [show, setShow] = useState(false);

  return (
    <>
<div className='checkmate'>

      {show ? <div className='status'>Content</div> : null}
      <button onClick={() => { setShow(false) }}>hide</button>
      <button onClick={() => { setShow(true) }}>show</button>
</div>
    </>
  )
}

export default App
