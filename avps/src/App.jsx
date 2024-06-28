import React from 'react'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import './index.css';

import Home from './pages/Home.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import LoginRegister from './pages/LoginRegister.jsx'
import VehicleList from './pages/VehicleList.jsx';

const router = createBrowserRouter(
  createRoutesFromElements( 
  <>
    <Route index element= {<LoginRegister/>}/>
    <Route path="/Home" element= {<Home/>}/>
    <Route path="/VehicleList" element= {<VehicleList/>}/>
  </>
  
))

const App = () => {

  const names = ['annef','ajx','raku'];
  return (
    <RouterProvider router = {router} />
    
  )
}

export default App
 