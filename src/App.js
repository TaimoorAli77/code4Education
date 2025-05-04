import React, { createContext } from 'react'
import Child1 from './Child1';
// create provide consumer
const MyContext = createContext()
const MyNewContext = createContext()
const App = () => {
  //create(in parent comp),provide(in parent Comp),useContext (in child compo)=>> useContext Hook for simple useCases
  // ==> Context Api
  const sharedData = "Hello from parent !!"
  const newData = 'My hello world new data'
  return (
    <MyContext.Provider value={sharedData}>
      <MyNewContext.Provider value={newData}>
        <div>
          <h1>Context Api </h1>
          <Child1 />
        </div>
      </MyNewContext.Provider>
    </MyContext.Provider>
  )
}

export default App

export { MyContext, MyNewContext }