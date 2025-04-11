import React, { Component, createRef } from 'react';

class App extends Component {
  constructor() {
    super();
    this.myInputRef = createRef()
  }
  // componentDidMount() {
  //   this.myInputRef.current.value = "Taimoor Ali"
  // }
  handleClick = () => {
    this.myInputRef.current.focus()
    this.myInputRef.current.style.color = "white"
    this.myInputRef.current.style.background = "green"
    console.log(this.myInputRef.current.value)
  }
  render() {
    console.log(this.myInputRef)
    return (
      <div className="App">
        <h1>Ref In React</h1>

        <input type="text" ref={this.myInputRef} />
        <button onClick={this.handleClick}>Focus input</button>
      </div>
    )
  }

}

export default App;
