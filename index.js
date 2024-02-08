const express = require('express');
const sequelize = require('./config/db');
const etudiantsRoutes = require('./routes/routes');
const app = express();

app.use(express.json());

app.use('/etudiants', etudiantsRoutes);

sequelize.sync()
    .then(() => {
        console.log('Base de données synchronisée');
    })
    .catch(err => {
        console.error('Erreur de synchronisation de la base de données :', err);
    });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
