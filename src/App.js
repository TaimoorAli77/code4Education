import React, { Component } from 'react'
import './App.css'
import Unmount from './Unmount'
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      show: true
    }
  }

  render() {
    console.log(this.state.show)
    return (<>
      <div className='checkmate'>
        <h1 className='checkmate'> Component in React </h1>
        {this.state.show? <Unmount />:"Removed"}
        <button onClick={() => { this.setState({ show: !this.state.show }) }}>Remove Component</button>
      </div>
    </>
    )
  }
}
