import React, { useRef } from 'react'

const App = () => {
  const inputRef = useRef(null)
  const inputRef2 = useRef(null)
  const inputRef3 = useRef(null)
  const handleChange = (e) => {
    e.preventDefault();
    console.log("The first input Value:", inputRef.current.value)
    console.log("The Second input value: ", inputRef2.current.value)
    console.log("3rd val : ", inputRef3.current.value)
    console.log("4th val : ", document.getElementById("val3").value)

  }
  return (
    <div>
      <h1 >Uncontrolled Component: useRef are used and useState are not used in form handling. Dom is used to manage
        value. No rerenders. reacts virtual Dom and actual dom diff. through id can also be used.</h1>
      <form onSubmit={handleChange}>

        <input type="text" ref={inputRef} />
        <input type="text" ref={inputRef2} />
        <input type="text" ref={inputRef3} />
        <input type='text'  id='val3'/>

        <button>submit</button>
      </form>

    </div>
  )
}

export default App
