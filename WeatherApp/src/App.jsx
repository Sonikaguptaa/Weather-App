import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Weather from "./components/Weather";
import NavBar from "./components/NavBar";

const App = () => {
  // const [favoriteLocations, setFavoriteLocations] = useState([]);

  // const addFavoriteLocation = (locationData) => {
  //   setFavoriteLocations([...favoriteLocations, locationData]);
  // };

  // const removeFavoriteLocation = (locationName) => {
  //   setFavoriteLocations(
  //     favoriteLocations.filter((location) => location.name !== locationName)
  //   );
  // };

  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/weather" element={<Weather />} />

        {/* <Route path="/ MyLocations" element={<MyLocations />} /> */}
      </Routes>

      <Weather
      // favoriteLocations={favoriteLocations}
      // addFavoriteLocation={addFavoriteLocation}
      />

      {/* <MyLocations
        favoriteLocations={favoriteLocations}
        removeFavoriteLocation={removeFavoriteLocation}
      /> */}
    </div>
  );
};

export default App;
