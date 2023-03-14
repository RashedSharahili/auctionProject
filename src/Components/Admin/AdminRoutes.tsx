import React from "react";
import { Route, Routes as Routess } from "react-router-dom";
import AdminPanel from "./AdminPanel";
import AuctionsReq from "./AuctionsReq";

function Routes() {
  return (
    <Routess>
      <Route path="/" element={<AdminPanel children={undefined} />}></Route>
      <Route path="/auctionsRequests" element={<AdminPanel children={<AuctionsReq />} />}></Route>
    </Routess>
  );
}

export default Routes;
