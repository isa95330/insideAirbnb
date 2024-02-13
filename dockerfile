# Utilisez l'image officielle Node.js comme image de base
FROM node:14-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez les fichiers de votre application dans le conteneur
COPY package*.json ./
RUN npm install
COPY . .

# Construisez votre application React
RUN npm run build

# Exposez le port sur lequel votre application React fonctionnera
EXPOSE 3000

# Commande pour démarrer votre application React
CMD ["npm", "start"]
