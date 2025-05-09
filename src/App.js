import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Navbar from './Component/Navbar';
import Service from './Component/Service';
import PageNotFound from './Component/PageNotFound';
import UserList from './Component/UserList';
import UserProfile from './Component/UserProfile';

const App = () => {

  return (
    <div style={{ textAlign: "center" }}>
      <h1>React Router Dom</h1>
      {/* Navigations */}
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/user' element={<UserList />} />
          <Route path='/user/:userId' element={<UserProfile />} />


          {/* <Route path='/*' element={<h1>Page not Found</h1>} /> */}
          <Route path='/*' element={<PageNotFound />} />

        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
