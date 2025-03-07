import React from 'react'
import './App.css'
import { Button, Alert } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Alert from 'react-bootstrap/Alert';


const App = () => {


  return (<>
    <div className='App'>
      <h1> Bootstrap in React </h1>
      <h3>Button</h3>
      <Button variant="primary">Primary</Button>{"  "} <br></br>
      <h3>Alerts</h3>
      
        <Alert  variant={'primary'}>
          This is a  alert—check it out!
        </Alert>
      
    </div>


  </>

  )
}

export default App
