import React, { Component } from 'react'
import './App.css'
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  shouldComponentUpdate(nextProp, nextState) {
    console.log("Should Component Update !", this.state.count, nextState)
    // return false
    //   if (nextState.count < 5)   return true
    // return false
    if (nextState.count > 5) return true
    return false
  }

  render() {
    return (<>
      <div className='checkmate'>
        <h1 className='checkmate'>LifeCycle ShouldComponentUpdate in React </h1>
        <h2>Counter : {this.state.count}</h2>
        <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Click</button>
      </div>
    </>
    )
  }
}
