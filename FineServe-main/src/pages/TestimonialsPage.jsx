import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReferralHero from "../components/ReferralHero";
import HowReferralWorks from "../components/HowReferralWorks";
import ChooseUs from "../components/ChooseUs";
import TestimonialsRef from "../components/TestimonialsRef";
import LetsConnect from "../components/LetsConnect";
import ReferralForm from "../components/ReferralForm";
import ReferralNetwork from "../components/ReferralNetwork";

const Refral = () => {
  return (
    <>
      <Navbar />  
      <ReferralHero />
      <HowReferralWorks />
      <ChooseUs />
      <ReferralNetwork />
      <TestimonialsRef />
      <ReferralForm />
      <LetsConnect />
      <Footer />
    </>
  );
};

export default Refral;
