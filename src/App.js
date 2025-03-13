import React from 'react'
import './App.css'
import { Table,Container,Row,Col } from 'react-bootstrap'

const App = () => {

  const Object = [
    {
      id: 1,
      product: "Classy",
      price: 20,
      objCategories: ["One", "Two", "Three", "Four"]

    },
    {
      id: 2,
      product: "Modern",
      price: 40,
      objCategories: ["One2", "Two2", "Three2", "Four2"]

    },
    {
      id: 3,
      product: "New",
      price: 60,
      objCategories: ["One3", "Two3", "Three3", "Four3"]

    },
  ]
  return (<>
    <div className='App'>
      <h1>Nested Map</h1>
      {/* Example 1 */}
      <ul>
        {Object.map((data) => (
          <div key={data.id}>
            <h1>Prod: </h1>
            <li>{data.product}</li>
            <li>{data.price}</li>
            <br></br>
            <ul>objCategories:
              {/* <ol > */}
              {data.objCategories.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
              {/* </ol> */}
            </ul>

          </div>
        ))}
      </ul>

      {/* Example 2 */}

      <Container>
        <Row>
          <Col md={{span:6,offset:3}}>
          <Table className='table'>
            <thead>
              <tr>
                <th>Product</th>
                <th>Items</th>
                <th>Categories</th>
              </tr>
            </thead>
            <tbody>
              {Object.map((data,i)=>(

              <tr key={data.id}>
                <td>{data.product}</td>
                 <td>{data.price}</td>
                 <td>
                  <ul className='list-unstyled'>
                    {data.objCategories.map((d,i)=>{
                     return  <li key={i}>{d}</li>
                    })}

                  </ul>
                 </td>
              </tr>
              ))}
            </tbody>
            
            </Table>
            </Col>
        </Row>
      </Container>

    </div>
  </>

  )
}

export default App
