import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/home/home.component";
import Shop from "./components/shop/shop.component";
import CarDetails from "./components/car-details/car-details.component";
import Logo from "./components/logo/logo.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Logo />}>
        <Route index element={<Home />} />
        <Route path="/learn/:carId" element={<CarDetails />} />
        <Route path="/shop/:carId" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
