import { useState } from "react";
import { Route, Routes as Routess } from "react-router-dom";
import "./App.css";
import AboutUs from "./Components/AboutUs";
import Auctions from "./Components/Auctions";
import CardsHome from "./Components/CardsHome/CardsHome";
import Header from "./Components/CardsHome/Header";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <Home />
    <Header/>
    <CardsHome />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
