// backend/routes/monitoriaRoutes.js

const express = require('express');
const router = express.Router();
const monitoriaController = require('../controllers/monitoriaController');

// Rota para agendar uma nova monitoria
router.post('/agendar', monitoriaController.agendarMonitoria);

// Rota para listar todas as monitorias agendadas
router.get('/listar', monitoriaController.listarMonitorias);

// Rota para encontrar uma monitoria pelo ID
router.get('/:id', monitoriaController.encontrarMonitoriaPorId);

// Rota para atualizar uma monitoria pelo ID
router.put('/:id', monitoriaController.atualizarMonitoria);

// Rota para excluir uma monitoria pelo ID
router.delete('/:id', monitoriaController.excluirMonitoria);

module.exports = router;