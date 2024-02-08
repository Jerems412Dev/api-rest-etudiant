const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const EtudiantEntity = sequelize.define('Etudiant', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prenom: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = EtudiantEntity;