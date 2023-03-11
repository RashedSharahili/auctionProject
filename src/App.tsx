import { useState } from 'react'
import { Route, Routes as Routess } from 'react-router-dom'
import './App.css'
import Auctions from './Components/Auctions'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Nav from './Components/Nav'

function App() {

  return (
    <div className="App">
      <Nav/>
      <div className="container">
        <Routess>
          <Route  path='/' element={<Home />}></Route>
          <Route  path='/auctions' element={<Auctions />}></Route>
        </Routess>
      </div>
    <footer>
    <Footer/>
    </footer>
    </div>
  )
}

export default App
