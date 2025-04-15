// src/routes.js
const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/dados', controller.getDataFromCSV);
router.post('/dados', controller.addDataToCSV);
router.put('/dados/:id', controller.editDataInCSV);
router.delete('/dados/:id', controller.deleteDataFromCSV);

// Certifique-se de exportar o router
module.exports = router;
