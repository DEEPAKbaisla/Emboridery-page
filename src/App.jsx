import React from 'react'
import './index.css'


import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Navbar from './components/navbar/Navbar.jsx'
import Couple from './components/Couple/Couple'


function App() {


  return (
    <>
      <Navbar />
      <Home />
      <Work />
      <Couple />
      <Contact />


    </>
  )
}

export default App
