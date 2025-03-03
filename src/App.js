import React, { Component } from 'react'
import './App.css'
import UserList from './UserList'
export default class App extends Component {
  
  render() {
    return (
      <div className='App'>
        <h1>Props in Class Component</h1>
        <UserList name="Abdul Ahad " email="Taimoorali083@gmail.c0m"/>  
      </div>
    )
  }
}
