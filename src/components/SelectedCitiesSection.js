import React from "react";
import { Link } from "react-router-dom";

const SelectedCitiesSection = () => {
  const cities = [
    { name: "New York City", image: "http://insideairbnb.com/images/new-york-city_200px.png" },
    { name: "London", image: "http://insideairbnb.com/images/london_200px.png" },
    { name: "San Francisco", image: "http://insideairbnb.com/images/san-francisco_200px.png" },
    { name: "Paris", image: "http://insideairbnb.com/images/paris_200px.png" },
    { name: "Barcelona", image: "http://insideairbnb.com/images/barcelona_200px.png" },
    { name: "Amsterdam", image: "http://insideairbnb.com/images/amsterdam_200px.png" }
  ];

  // Séparer la liste des villes en deux parties
  const firstRow = cities.slice(0, 3);
  const secondRow = cities.slice(3);

  return (
    <div className="selected-cities-section">
      <h2>Villes sélectionnées</h2>
      <div className="city-row">
        <div className="city-cards">
          {firstRow.map((city, index) => (
            <Link key={index} to={`/city/${city.name}`}>
              <div className="city-card">
                <img src={city.image} alt={city.name} />
                <div className="city-name-overlay">{city.name}</div>
              </div>
            </Link>
          ))}
        </div>
        <div className="city-cards">
          {secondRow.map((city, index) => (
            <Link key={index + 3} to={`/city/${city.name}`}>
              <div className="city-card">
                <img src={city.image} alt={city.name} />
                <div className="city-name-overlay">{city.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Link to="/map">Voir la carte</Link> {/* Lien vers la page de la carte */}
    </div>
  );
};

export default SelectedCitiesSection;
