import React from 'react'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'

import Home from './pages/Home.jsx'
import MainLayout from './layouts/MainLayout.jsx'

const router = createBrowserRouter(
  createRoutesFromElements( 
  <Route path='/' element={<MainLayout/>}>
    <Route index element= {<Home/>}/>
  </Route>
))

const App = () => {

  const names = ['annef','ajx','raku'];
  return (
    <RouterProvider router = {router} />
  )
}

export default App
 