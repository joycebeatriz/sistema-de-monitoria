// monitoriaController.js

const express = require('express');
const router = express.Router();
const path = require('path');

// Definição da função criarAgendamento
function criarAgendamento(req, res) {
    // Lógica para criar um novo agendamento
    // Exemplo:
    res.status(200).json({ message: 'Agendamento criado com sucesso' });
}

// Rota para a página principal (index.html)
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Rota para a página de agendamento (agendar.html)
router.get('/agendar', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/agendar.html'));
});

// Rota para a página de meus agendamentos (meusAgendamentos.html)
router.get('/meusAgendamentos', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/meusAgendamentos.html'));
});

// Rota para criar um novo agendamento (incluindo agendar um novo horário)
router.post('/api/agendar', criarAgendamento);

// Exportação da rota
module.exports = router;
