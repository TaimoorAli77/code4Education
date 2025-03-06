import React, { Component } from 'react'
import './App.css'
import RenderMethod from './RenderMethod'
export default class App extends Component {
  constructor() {
    super()
    console.log("constructor")
    this.state = {
      name: "Taimoor"
    }
  }
  render() {
    console.log("rendered!")
    return (<>
      <div className='checkmate'>
        <h1 className='checkmate'>LifeCycle Methods in React </h1>
        <RenderMethod name={this.state.name} />
        <button onClick={() => { this.setState({ name: "Abdul Ahad" }) }}>Click</button>

      </div>
    </>
    )
  }
}
