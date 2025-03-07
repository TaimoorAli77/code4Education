import React, { Component } from 'react'
import './App.css'
export default class App extends Component {
  constructor() {
    super()
    //first this will run
    console.log("constructor")
    this.state = {
      name: "Taimoor",
      count: 0
    }
  }
  componentDidUpdate() {
    console.log("Component did Update")
  }
  //third cDM will run.. mostly libraries and api calls are called inside the componentDidMount 
  // because it just calls once when we start the app.
  componentDidMount() {
    console.log("Component Did Mount !")
  }
  //second render will run

  Increment = () => {
    this.setState((prev) => ({
      count: prev.count + 1
    }))
  }
  IncrementSec = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    console.log("render", this.state)
    return (<>
      <div className='checkmate'>
        <h1 className='checkmate'>Component did mount in React </h1>
        <button onClick={() => { this.setState((prev) => ({ count: prev.count + 1 })) }}>Click</button>


        <h2>Counter : {this.state.count}</h2>
        <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Click</button>
        <h1>Another ...</h1>
        <button onClick={this.IncrementSec}>Click</button>
        <h2>
          <button onClick={this.Increment}>Click</button>

        </h2>
        <h1>Component Did Update !</h1>
        <button onClick={()=>{this.setState({name:"Malik Taimoor Ali Awan"})}}>Update Btn</button>
{this.state.name}
      </div>
    </>
    )
  }
}
