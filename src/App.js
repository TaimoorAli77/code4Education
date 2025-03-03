import './App.css';
import React, { useState } from 'react'
import UserCard from './UserCard';

const App = () => {
  const [myName, setMyName] = useState("Taimoor")
  // let data = [
  //   {
  //     name: "James	Smith",
  //     age: 28,
  //     date: "1/2/1981",
  //     email: "JamesSmith@gmail.com"
  //   },
  //   {
  //     name: "Christopher",
  //     age: 100,
  //     date: "2/3/1981",
  //     email: "ChristopherAnderson@gmail.com"
  //   }
  // ]
  return (
    <div className='App'>
      <h1>Props In React : </h1>
      {/* <UserCard fname="Taimoor" lname="Ali" /> */}
      {/*  Above we call a Component and then passed prop i.e, name through it and then in that component we use 
      prop keyword or any other word in function to access this value and use as prop.name  */}
      {/* below is passing an arrays value in to another component UserCard which will ne called */}
      {/* {data.map((data, i) => (
        <UserCard key={i} name={data.name} age={data.age} date={data.date} email={data.email} />
      ))} */}
      <button onClick={() => { setMyName("Abdul Jawad Aslam") }}>Update Props</button>
      <UserCard name={myName} />
    </div>
  )
}

export default App
