import React from 'react'
import './App.css'


const App = () => {

  const tableObj = [
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
  return (<>
    <div className='App'>
      <h1>Table</h1>
      <table className='App'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Product</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {tableObj.map((data, i) => {
            return <tr key={i}>
              <td>{data.id}</td>
              <td>{data.product}</td>
              <td>{data.price}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  </>

  )
}

export default App
