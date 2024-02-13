import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MapComponent() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get('/api/locations');
        setLocations(response.data);
        console.log('Données de localisation récupérées avec succès :', response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données de localisation :', error);
      }
    };

    fetchLocations();
  }, []);

  useEffect(() => {
    if (locations.length > 0) {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: locations[0].latitude, lng: locations[0].longitude },
        zoom: 10,
      });

      locations.forEach(location => {
        new window.google.maps.Marker({
          position: { lat: location.latitude, lng: location.longitude },
          map: map,
          title: location.name,
        });
      });
    }
  }, [locations]);

  return (
    <div>
      <h2>Carte des localisations</h2>
      <div id="map" style={{ height: '400px', width: '100%' }}></div>


    </div>
  );
}
export default MapComponent;



