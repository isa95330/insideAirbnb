import React, { useEffect, useState } from "react";
import axios from "axios";
import {Marker} from "@react-google-maps/api";

const MapWithPoints = () => {
  const [points, setPoints] = useState([]);

  // Fonction pour récupérer les données CSV depuis l'API
  const fetchData = async () => {
    try {
      const response = await axios.get("/api/points"); // Endpoint de votre API pour récupérer les données CSV
      const data = response.data; // Supposons que la réponse contient les données CSV sous forme de tableau
      // Analysez les données CSV et extrayez les coordonnées des points
      const parsedPoints = data.map(item => ({ lat: parseFloat(item.lat), lng: parseFloat(item.lng) }));
      setPoints(parsedPoints);
    } catch (error) {
      console.error("Erreur lors de la récupération des données CSV :", error);
    }
  };

  // Chargez les données CSV lorsque le composant est monté
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* Afficher la carte et les points une fois les données chargées */}
      <h2>Carte avec des points depuis un fichier CSV</h2>
      {/* Utilisez la librairie de cartographie de votre choix pour afficher la carte */}
      {/* Exemple fictif avec Google Maps */}
      <div id="map">
        {points.map((point, index) => (
          <Marker key={index} position={{ lat: point.lat, lng: point.lng }} />
        ))}
      </div>
    </div>
  );
};

export default MapWithPoints;
