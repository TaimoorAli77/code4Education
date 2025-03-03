import React, { Component } from 'react'
import './App.css'
import UserList from './UserList'
export default class App extends Component {
  constructor(){
    super()
    this.state = {
      name : "Taimoor",
      age:30
    }
  }
  render() {
    const {name,age} = this.state
    return (
      <div className='App'>
        <h1>Props in Class Component</h1>
        {/* <UserList name="Abdul Ahad " email="Taimoorali083@gmail.c0m"/>   */}
        <button onClick={()=>{this.setState({name:"Ali",age:19})}}>Click to change data</button>
        <UserList name={name} age={age}/>  

      </div>
    )
  }
}
