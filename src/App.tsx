import { useState } from 'react'
import { Route, Routes as Routess } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Nav from './Components/Nav'
import Routes from './Components/Routes'

function App() {
  return (
    <div className="App">
      <Nav />
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
