import React from 'react'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import './index.css';

import Home from './pages/Home.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import LoginRegister from './pages/LoginRegister.jsx'
import VehicleList from './pages/VehicleList.jsx';
import RegistrationPage from './pages/RegistrationPage.jsx';
import WebCam from './components/WebCam.jsx';

const router = createBrowserRouter(
  createRoutesFromElements( 
  <>
    
    <Route index element= {<LoginRegister/>}/>
    <Route path="/Home" element= {<Home/>}/>
    <Route path="/VehicleList" element= {<VehicleList/>}/>
    <Route path="/Registration" element= {<RegistrationPage/>}/>
    
    
  </>
  
))

const App = () => {

  const names = ['annef','ajx','raku'];
  return (
    //<RouterProvider router = {router} />
    <WebCam/>
  )
}

export default App
 