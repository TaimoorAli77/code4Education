import React, { useRef } from 'react'

const App = () => {
  const inputRef = useRef(null)
  const handleBtn = () => {
    const inputValue = inputRef.current.value;
    alert(`value  :  ${inputValue}`)
    console.log(`value  :  ${inputValue}`)
    console.log(inputRef)
  }
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleBtn}>check ref/ Get input Value</button>
    </div>
  )
}

export default App
