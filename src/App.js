import React, { Fragment, useState } from 'react'
import './App.css'
import ChildComponent from './ChildComponent'
import ShareComp from './ShareComp'

const App = () => {
  const [sharedData, setSharedData] = useState('')

  const changeData = (data) => {
    setSharedData(data)
    console.log(sharedData)
  }
  const parentAlert = (d) => {
    alert(d.name)
    console.log(d)
  }
  return (
    // <>   or
    // <React.Fragment>  or
    <Fragment>

      <h1>Lifting State Up (From child to parent)</h1>

      <ChildComponent sharedData={sharedData} changeData={changeData} />

      <ShareComp d={sharedData} alert={parentAlert} />

    </Fragment>
    // </React.Fragment>
    // </>

  )
}

export default App
