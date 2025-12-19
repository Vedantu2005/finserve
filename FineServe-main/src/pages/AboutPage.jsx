import React from "react";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import DifferenceAndValues from "../components/DifferenceAndValues";
import ProofSection from "../components/ProofSection";
import Footer from "../components/Footer";
import LetsTalk from "../components/LetsTalk";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <AboutSection />
      <DifferenceAndValues />
      <ProofSection />
      <LetsTalk />
      <Footer />
    </>
  );
};

export default AboutPage;
