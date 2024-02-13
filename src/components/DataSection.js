import React from "react";

const DataSection = () => {
  return (
    <div className="data-section">
      <div className="explore">
        <h2>Explorez les données</h2>
        <p>
          Inside Airbnb a collecté des données sur des dizaines de villes et de
          pays à travers le monde (d'autres à venir !).
        </p>
        <div className="search-bar">
          <input type="text" placeholder="Choisissez une ville" />
          <button onClick={() => alert("Recherche en cours...")}>Rechercher</button>
        </div>
        <p><a href="#">Parcourez toutes les villes</a></p>
      </div>
    </div>
  );
};

export default DataSection;
