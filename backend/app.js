// backend/app.js

const express = require('express');
const app = express();
const monitoriaRoutes = require('./routes/monitoriaRoutes');

// Middleware para análise do corpo da solicitação
app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
    res.send('Bem-vindo ao Sistema de Gestão de Suporte Acadêmico para Agendamento de Monitoria');
});

// Rotas relacionadas à monitoria
app.use('/monitoria', monitoriaRoutes);

// Definindo porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
