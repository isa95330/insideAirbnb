import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import InfoSection from "./components/InfoSection";
import DataSection from "./components/DataSection";
import SelectedCitiesSection from "./components/SelectedCitiesSection";
import CityDetails from "./components/CityDetails";
import MapContainer from "./components/MapContainer";

function App() {
  return (
    <Router>
  <div className="bg-gradient-to-b from-black to-gray-800">
    <NavBar />
    <InfoSection />
    <DataSection />
    <SelectedCitiesSection />
    <Routes>
      {/* Déplacez la balise <MapContainer /> à l'intérieur de <Routes> */}
      <Route path="/city/:cityName" element={<CityDetails />} />
      <Route path="/map" element={<MapContainer />} />
    </Routes>
  </div>
</Router>

  );
}

export default App;
