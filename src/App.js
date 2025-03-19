import React, { Component } from 'react'
import Rpure from './Rpure'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count :0
    }
  }
  handleIncrement = ()=>{
    this.setState((prevState)=>({
      count: prevState.count + 1
      //if we don't make this change pure component won't be called.
  }))
  }
  render() {
    console.log("Parent Rendered!")
    return (
      <div>
        <h1>React Pure component </h1>
        <Rpure count = {this.state.count} func={this.handleIncrement}/>
      </div>
    )
  }
}
