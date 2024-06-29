import React from 'react'
import Navbar from '../components/Navbar'
import VehicleDetails from '../components/VehicleDetails'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom';

const VehicleList = () => {
    const location = useLocation();
    React.useEffect(()=> {
      console.log(location.state)
    },[])
    const headings = location.state?.heading || 'Vehicle Details';
  return (
    <div>
        <Navbar/>
        <VehicleDetails />
        <Footer/>
    </div>
  )
}

export default VehicleList