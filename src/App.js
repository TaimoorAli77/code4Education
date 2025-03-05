import React, { Component } from 'react'
import './App.css'
export default class App extends Component {
  constructor(){
    super()
    console.log("constructor")
  }
  render() {
    console.log("rendered!")
    return (<>
      <div className='checkmate'>
        <h1 className='checkmate'>LifeCycle Methods in React </h1>

      </div>
    </>
    )
  }
}
