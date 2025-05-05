import React, { useLayoutEffect, useRef, useState } from 'react'

const App = () => {
  const [width, setWidth] = useState(0)
  const elementRef = useRef(null)
  console.log(elementRef)
  useLayoutEffect(() => {
    if (elementRef.current) {
      setWidth(elementRef.current.getBoundingClientRect().width)
    }
  }, [])

  return (
    <div style={{ textAlign: "center" }}>
      <h1>useLayoutEffect Hook </h1>

      <h2>Width Measurement Example</h2>

      <div ref={elementRef} style={{ width: "600px", margin: 'auto', background: "lightblue" }}>Element whose width is Measured.</div>
      <p>width : {width}px</p>
    </div>
  )
}

export default App
