import React, { useSyncExternalStore } from 'react'

const App = () => {

  const width = useSyncExternalStore((listener) => {
    window.addEventListener("resize", listener)
    return () => {
      window.removeEventListener("resize", listener)
    }
  }, () => window.innerWidth)

  return (
    <div style={{ textAlign: "center" }}>
      <h1>useSyncExternalStore Hook </h1>

      <h2>{width}</h2>
    </div>
  )
}

export default App
