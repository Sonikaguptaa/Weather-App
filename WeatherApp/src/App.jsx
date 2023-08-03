import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";


import Weather from "./components/Weather";
import NavBar from "./components/NavBar";
import MajorCity from "./components/MajorCity";
import Forecast from "./components/Forecast";


const App = () => {
  const [selectedCity, setSelectedCity] = useState("");


  return (
    <div>
      <NavBar />
      <Routes>

        <Route
          path="/"
          element={<Weather setSelectedCity={setSelectedCity} />}
        />
        <Route
          path="/forecast"
          element={<Forecast location={selectedCity} />}
        />
        <Route path="/:symbol" element={<MajorCity />} />
      </Routes>

    </div >
  );
};

export default App;
