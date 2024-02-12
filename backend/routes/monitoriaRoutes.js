// monitoriaRoutes.js

const express = require('express');
const router = express.Router();
const path = require('path');
const { listarAgendamentos } = require('../controllers/monitoriaController');

// Rota para a página principal (index.html)
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Rota para listar todos os agendamentos
router.get('/api/agendamentos', listarAgendamentos);

// Rota para listar os agendamentos do usuário logado
router.get('/api/meusAgendamentos', listarAgendamentos);

module.exports = router;