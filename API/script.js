const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware pour autoriser les requêtes cross-origin (CORS)
app.use(cors());

// Données des coordonnées des villes
const cityCoordinates = {
  'New York City': { lat: 40.712776, lng: -74.005974 },
  'London': { lat: 51.507351, lng: -0.127758 },
  'San Francisco': { lat: 37.7749, lng: -122.4194 },
  'Paris': { lat: 48.8566, lng: 2.3522 },
  'Barcelona': { lat: 41.3851, lng: 2.1734 },
  'Amsterdam': { lat: 52.3676, lng: 4.9041 }
  // Ajoutez les coordonnées pour les autres villes
};

// Route pour récupérer les coordonnées d'une ville spécifique
app.get('/api/city/:cityName', (req, res) => {
  const cityName = req.params.cityName;
  console.log(cityName);
  const coordinates = cityCoordinates[cityName];

  if (coordinates) {
    res.json({ coordinates });
  } else {
    res.status(404).json({ error: 'Ville non trouvée' });
  }
});

// Ajoutez une route pour vérifier que l'API fonctionne
app.get('/api', (req, res) => {
  res.send('L\'API fonctionne correctement');
});

app.listen(PORT, () => {
  console.log(`Le serveur écoute sur le port ${PORT}`);
});
