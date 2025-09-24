import React from "react";
import "./index.css";

import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navbar from "./components/navbar/Navbar";
import Couple from "./components/Couple/Couple";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Work />
      <Couple />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
