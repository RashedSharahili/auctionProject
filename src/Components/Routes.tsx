import React from "react";
import { Route, Routes as Routess } from "react-router-dom";
import AboutUs from "./AboutUs";
import Auctions from "./Auctions";
import AuctionsDetails from "./AuctionsDetails";
import CardHome from "./CardsHome/CardsHome";
import ContactUs from "./ContactUs";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import FormAcution from "./FormAcution";
import AdminPanel from "./Admin/AdminPanel";
import Admin from "./Admin/Admin";
import AdminRoutes from "./Admin/AdminRoutes";
import Profile from "./CardsHome/Profile";

function Routes() {
  return (
    <Routess>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<AboutUs />}></Route>
      <Route path="/auctions" element={<Auctions />}></Route>
      <Route path="/auctionDetails/:id" element={<AuctionsDetails />}></Route>
      <Route path="/contact" element={<ContactUs />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/FormAuction" element={<FormAcution/>}></Route>
      <Route path="/adminPanel" element={<AdminRoutes />}></Route>
      <Route path="/profile" element={<Profile />}></Route>

    </Routess>
  );
}

export default Routes;
