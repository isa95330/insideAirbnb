const express = require('express'); // Importation du module Express
const cors = require('cors'); // Importation du module CORS

const app = express(); // Création d'une instance de l'application Express
const PORT = process.env.PORT || 5000; // Définition du port sur lequel le serveur écoutera les requêtes

// Middleware pour autoriser les requêtes cross-origin (CORS)
app.use(cors());

// Données des coordonnées des villes
const cityCoordinates = {
  'New York City': { lat: 40.712776, lng: -74.005974 }, // Coordonnées de New York
  'London': { lat: 51.507351, lng: -0.127758 }, // Coordonnées de Londres
  'San Francisco': { lat: 37.7749, lng: -122.4194 }, // Coordonnées de San Francisco
  'Paris': { lat: 48.8566, lng: 2.3522 }, // Coordonnées de Paris
  'Barcelona': { lat: 41.3851, lng: 2.1734 }, // Coordonnées de Barcelone
  'Amsterdam': { lat: 52.3676, lng: 4.9041 } // Coordonnées d'Amsterdam
  // Ajoutez les coordonnées pour les autres villes
};

// Route pour récupérer les coordonnées d'une ville spécifique
app.get('/api/city/:cityName', (req, res) => {
  const cityName = req.params.cityName; // Récupération du nom de la ville depuis les paramètres de la requête
  console.log(cityName);
  const coordinates = cityCoordinates[cityName]; // Récupération des coordonnées de la ville à partir de la liste cityCoordinates

  // Vérification si les coordonnées existent pour la ville demandée
  if (coordinates) {
    res.json({ coordinates }); // Envoi des coordonnées au format JSON en réponse à la requête
  } else {
    res.status(404).json({ error: 'Ville non trouvée' }); // Si la ville n'est pas trouvée, renvoyer une réponse avec un statut 404 et un message d'erreur
  }
});

// Ajoutez une route pour vérifier que l'API fonctionne
app.get('/api', (req, res) => {
  res.send('L\'API fonctionne correctement'); // Réponse simple pour vérifier que l'API fonctionne correctement
});

// Lancement du serveur Express, qui écoute les requêtes entrantes sur le port spécifié
app.listen(PORT, () => {
  console.log(`Le serveur écoute sur le port ${PORT}`); // Affichage d'un message de confirmation lorsque le serveur démarre avec succès
});
