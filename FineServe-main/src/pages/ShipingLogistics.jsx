import React from "react"
import ShipingLogistics1 from '../components/ShipingLogistics1'
import ShipingLogistics2 from '../components/ShipingLogistics2'
import ShipingLogistics3 from '../components/ShipingLogistics3'
import ShipingLogistics4 from '../components/ShipingLogistics4'
import ShipingLogistics5 from '../components/ShipingLogistics5'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function ShipingLogistics() {

  return (
    <>
    <Navbar/>
      <ShipingLogistics1/>
      <ShipingLogistics2/>
      <ShipingLogistics3/>
      <ShipingLogistics4/>
      <ShipingLogistics5/>
      <Footer/>
    </>
  )
}

export default ShipingLogistics;
