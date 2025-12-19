import React from "react"
import Payroll1 from '../components/payroll1'
import Payroll2 from '../components/payroll2'
import Payroll3 from '../components/payroll3'
import Payroll4 from '../components/payroll4'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


function payroll() {

  return (
    <>
    <Navbar/>
      <Payroll1/>
      <Payroll2/>
      <Payroll3/>
      <Payroll4/>
      <Footer/>
    </>
  )
}

export default payroll;
