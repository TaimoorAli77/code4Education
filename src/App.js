import React from 'react'
import './App.css'


const App = () => {

  // Example 1
  const arr = ["A", "B", "C", "D"]
  //Example 2 Array of objects
  const arrObj = [
    {
      id: 1,
      product: "Classy",
      price: 20
    },
    {
      id: 2,
      product: "Modern",
      price: 40
    },
    {
      id: 3,
      product: "New",
      price: 60
    },
  ]
  //Example 3

  const fruits = ["Apple", "Mangoes", "Banana", "Oranges"]
  const fruitItems = fruits.map((fruit, index) => <li key={index}>{fruit}</li>)
  return (<>
    <div className='App'>
      <h1> Array With Map Function in React </h1>
      {/* Example 1 */}
      <h3>Example 1</h3>

      <ul>
        {arr.map((data, i) => (
          <div index={i}>
            <li>
              {data}
            </li>
          </div>
        ))}
      </ul>

      {/* //Example 2 */}
      <h3>Example 2</h3>

      <div>
        {arrObj.map((data, i) => (
          <div index={data.id}>
            <h3>PId:{data.id}</h3>
            <ul>
              <li>Name:{data.product}</li>
              <li> Price:$ {data.price}</li>
            </ul>
          </div>
        ))}
      </div>
      {/* Example 3 */}
      <h3>Example 3</h3>
      <ul>
        {fruitItems}
      </ul>
    </div>
  </>

  )
}

export default App
