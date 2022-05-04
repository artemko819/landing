import React from 'react'
import './index.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Experiance from './components/Experiance/Experiance'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Portfolio from './components/Portfolio/Portfolio'
import Services from './components/Services/Services'
import Testmonials from './components/Testmonials/Testmonials'

export const App = () => {
  return (
   <>
    <Header/>
    <Nav/>
    <About/>
    <Experiance/>
    <Services/>
    <Portfolio/>
    <Testmonials/>
    <Contact/>
    <Footer/>
   </>
  )
}
