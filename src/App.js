import React, { Component } from 'react'
import './App.css'
export default class App extends Component {
  constructor() {
    super()
    console.log("constructor")
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    console.log("Component Did Mount !")
  }
  render() {
    console.log("render", this.state)
    return (<>
      <div className='checkmate'>
        <h1 className='checkmate'>Component did mount in React </h1>
        <button onClick={() => { this.setState({count:this.state.count + 1}) }}>Click</button>
        <h2>Counter : {this.state.count}</h2>

      </div>
    </>
    )
  }
}
