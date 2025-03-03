import './App.css';
// import Button from './Button';
// import Counter from './Counter';
// import User2 from './User2';
// import User3 from './User3';
// import User4 from './User4';
// import Users, { NUsers, NewCustomer } from './Users';

// function App() {
//   return (
//     <>
//       <h1>Hello Taimoor!</h1>
//       <Users />
//       <Counter />
//       <NUsers />
//       <NUsers></NUsers>
//       <NewCustomer />
//       <User2 />
//       <User3 />
//       <User4 />
//       <Button />
//     </>
//   );
// }

// export default App;


import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    // super is used to use this.
    // initial state
    this.state = {
      // data: "Code 4 Education!"
      data: 1
    }
  }
  // function keyword is not declared in class
  demo() {
    // alert("Hello")
    this.setState({
      // data: "Taimoor Ali"
      data: this.state.data + 1
    })
  }
  render() {
    console.log(this.state.data)
    // In render we use console.log  
    return (
      <>
        <div className='App'>
          <h1 >Class Component</h1>
          <p>{this.state.data}</p>
          <button onClick={() => { this.demo() }}>Click Me!</button>
        </div>

      </>
    )
  }
}
