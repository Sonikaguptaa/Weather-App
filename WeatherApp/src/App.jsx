import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Weather from "./components/Weather";
import NavBar from "./components/NavBar";
import MajorCity from "./components/MajorCity";

const App = () => {


  return (
    <div>
      <NavBar />





      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/:symbol" element={<MajorCity />} />


      </Routes>

      {/* <Weather /> */}




    </div>
  );
};

export default App;
