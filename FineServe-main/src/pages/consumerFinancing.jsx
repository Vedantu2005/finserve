import React from "react"
import ConsumerFinance1 from '../components/ConsumerFinance1'
import ConsumerFinance2 from '../components/ConsumerFinance2'
import ConsumerFinance3 from '../components/ConsumerFinance3'
import ConsumerFinance4 from '../components/ConsumerFinance4'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


function ConsumerFinance() {

  return (
    <>
      <Navbar/>
      <ConsumerFinance1/>
      <ConsumerFinance2/>
      <ConsumerFinance3/>
      <ConsumerFinance4/>
      <Footer/>
    </>
  )
}

export default ConsumerFinance;
