import React from 'react'
import { Route, Routes as Routess } from 'react-router-dom'
import AboutUs from './AboutUs'
import Auctions from './Auctions'
import AuctionsDetails from './AuctionsDetails'
import ContactUs from './ContactUs'
import Home from './Home'
import Login from './Login'

function Routes() {
  return (
    <Routess>
          <Route  path='/' element={<Home />}></Route>
          <Route  path='/about' element={<AboutUs />}></Route>
          <Route  path='/auctions' element={<Auctions />}></Route>
          <Route  path='/auctionDetails/:id' element={<AuctionsDetails />}></Route>
          <Route  path='/contact' element={<ContactUs />}></Route>
          <Route  path='/login' element={<Login />}></Route>
        </Routess>
  )
}

export default Routes