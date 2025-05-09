import React, { useEffect, useId } from 'react'
import List from './List'
import Email from './Email';

const App = () => {
  const id = useId()

  useEffect(() => {
    console.log(id)
  })
  return (
    <div style={{ textAlign: "center" }}>
      <h1>useID Hook </h1>

      <Email />
      <article>
        To just center the text inside an element, use text-align: center;
      </article>
      <Email />
      
    </div>
  )
}

export default App
