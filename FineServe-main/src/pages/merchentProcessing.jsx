import React from "react"
import MerchentProcessing1 from '../components/MerchentProcessing1'
import MerchentProcessing2 from '../components/MerchentProcessing2'
import MerchentProcessing3 from '../components/MerchentProcessing3'
import MerchentProcessing4 from '../components/MerchentProcessing4'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


function MerchentProcessing() {

  return (
    <>
      <Navbar/>
      <MerchentProcessing1/>
      <MerchentProcessing2/>
      <MerchentProcessing3/>
      <MerchentProcessing4/>
      <Footer/>
    </>
  )
}

export default MerchentProcessing;
