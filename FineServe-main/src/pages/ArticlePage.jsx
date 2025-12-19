import React from "react"

import Navbar from "../components/Navbar"
import Article1 from "../components/Article1";
import Article2 from "../components/Article2"
import Footer from "../components/Footer";
import LetsTalk from './../components/LetsTalk';

function ArticlePage() {

  return (
    <>
    <Navbar />
      <Article1 />
      <Article2 />
      <LetsTalk />
      <Footer/>
    </>
  )
}

export default ArticlePage;
