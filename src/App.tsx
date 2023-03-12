import { useState } from 'react'
import { Route, Routes as Routess } from 'react-router-dom'
import './App.css'
import AboutUs from './Components/AboutUs'
import Auctions from './Components/Auctions'
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Login from './Components/Login'
import Nav from './Components/Nav'
import Nav2 from './Components/Nav2'

function App() {

  return (
    <div className="App">
      <Nav/>
      <div className="container">
        
      </div>
    <footer>
    <Footer/>
    </footer>
    </div>
  )
}

export default App
