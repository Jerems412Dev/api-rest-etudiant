const express = require('express');
const router = express.Router();
const etudiantsController = require('../controller/etudiant.controller');

router.get('/', etudiantsController.getAllEtudiants);
router.post('/', etudiantsController.createEtudiant);

module.exports = router;
