import { Route, Routes as Routess } from "react-router-dom";
import AboutUs from "../Components/AboutUs";
import Auctions from "../Components/Auctions";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import Login from "../Components/Login";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  return (
    <div>
      {/* <Routess>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/auctions" element={<Auctions />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routess> */}
    </div>
  );
}

export default Home;
