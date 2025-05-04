import React, { createContext } from 'react'
import Child1 from './Child1';
import NewChild from './NewChild';

const MyContext = createContext()
const chidAccessContextData = createContext()
const App = () => {
  // create(in parent comp) , provide(in parent Comp) , useContext (in child compo)
  const sharedData = "Hello from parent !!"
  const newChildData = "Welcome again accessing again new data by using"
  return (

    <div>
      <MyContext.Provider value={sharedData}>

        <h1>useContext hook </h1>
        <chidAccessContextData.Provider value={newChildData}>
          <NewChild />
        </chidAccessContextData.Provider>
        <Child1 />

      </MyContext.Provider>
    </div>
  )
}

export default App
export { MyContext, chidAccessContextData }