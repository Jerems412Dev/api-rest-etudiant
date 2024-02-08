const EtudiantEntity = require('../models/etudiant');

exports.getAllEtudiants = async (req, res) => {
    try {
        const etudiants = await EtudiantEntity.findAll();
        res.json(etudiants);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erreur lors de la récupération des étudiants' });
    }
};

exports.createEtudiant = async (req, res) => {
    try {
        const { nom, prenom } = req.body;
        if (!nom || !prenom) {
            return res.status(400).json({ message: 'Le nom et le prénom de l\'étudiant sont requis' });
        }

        const nouvelEtudiant = await EtudiantEntity.create({ nom, prenom });
        res.status(201).json(nouvelEtudiant);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erreur lors de la création de l\'étudiant' });
    }
};
