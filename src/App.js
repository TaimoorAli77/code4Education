import React, { useRef, useState } from 'react'
import ChildComponent from './ChildComponent';
import { Component } from 'react';

const App = () => {
const[val,setVal] =  useState("Taimoot")
const handleChange = (e)=>{
  setVal(e.target.value)
}
  return (
    <div>
      <h1 >controlled Component: states are used form and input plus watch w3school for refuse in function</h1> 
      <input type="text" value={val} onChange={(e)=>handleChange(e)}/>
      <h3>{val}</h3>
    </div>
  )
}

export default App
