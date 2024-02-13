import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { useParams } from 'react-router-dom';

const MapContainer = () => {
  const { cityName } = useParams();

  // Définissez les coordonnées géographiques pour chaque ville
  const cityCoordinates = {
    'New York City': { lat: 40.712776, lng: -74.005974 },
    'London': { lat: 51.507351, lng: -0.127758 },
    'San Francisco': { lat: 37.7749, lng: -122.4194 },
    'Paris': { lat: 48.8566, lng: 2.3522 },
    'Barcelona': { lat: 41.3851, lng: 2.1734 },
    'Amsterdam': { lat: 52.3676, lng: 4.9041 }
    // Ajoutez les coordonnées pour les autres villes
  };

  // Récupérez les coordonnées de la ville sélectionnée
  const cityPosition = cityCoordinates[cityName];

  return (
    <LoadScript googleMapsApiKey="AIzaSyD2vv-3Lw43vjA6HMq1bDdH9pKtTg9pPbs">

      <GoogleMap
        mapContainerStyle={{ height: '400px', width: '100%' }}
        zoom={10}
        center={cityPosition} // Centrez la carte sur la ville sélectionnée
      />
    </LoadScript>
  );
};

export default MapContainer;
