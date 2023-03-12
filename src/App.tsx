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

function App() {

  return (
    <div className="App">
      <Nav/>
      <div className="container">
        <Routess>
          <Route  path='/' element={<Home />}></Route>
          <Route  path='/about' element={<AboutUs />}></Route>
          <Route  path='/auctions' element={<Auctions />}></Route>
          <Route  path='/contact' element={<ContactUs />}></Route>
          <Route  path='/login' element={<Login />}></Route>
        </Routess>
      </div>
    <footer>
    <Footer/>
    </footer>
    </div>
  )
}

export default App
