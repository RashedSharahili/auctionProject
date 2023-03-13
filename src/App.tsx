import { useState } from 'react'
import { Route, Routes as Routess } from 'react-router-dom'
import './App.css'
import CardHome from './Components/CardsHome/CardsHome'
import Header from './Components/CardsHome/Header'
import Footer from './Components/Footer'
import Nav from './Components/Nav'
import Routes from './Components/Routes'

function App() {
  return (
    <div className="App">
      <Nav />
      <Header/>
      <CardHome/>
      <div className="container">
        <Routes />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
