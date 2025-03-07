import React from 'react'
import './App.css'
import './Styles.css'
//modules.css are used to hide classes name
import newStyles from './NewStyle.module.css'
import './style.scss'
const App = () => {
  const js = {
    color: "white",
    background: "orange"
  }

  return (<>
    <div className='App'>
      <h1> Styles in React </h1>
      <h1 style={{ color: "White", background: "Green" }}>Inline Style</h1>

      <h1 className='normal'>Normal Style</h1>

      <h1 style={js}>JS Style</h1>

      <h1 className={newStyles.capture}>Module Style</h1>

      <h1 className={"primary-scss"}> saas & <span>scss</span> Style</h1>

    </div>


  </>

  )
}

export default App
