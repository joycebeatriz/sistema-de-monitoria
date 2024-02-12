// db/index.js

const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST, // Use a variável de ambiente para o host do banco de dados
  dialect: 'mysql',
  logging: false // Desativar logging para evitar mensagens no console
});

const Agendamento = require('./models/Agendamento');

// Função para sincronizar os modelos com o banco de dados
async function syncModels() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');

    // Sincroniza o modelo Agendamento com o banco de dados
    await Agendamento.sync({ alter: true });
    console.log('Modelo Agendamento sincronizado com o banco de dados.');
  } catch (error) {
    console.error('Erro ao conectar e sincronizar modelos com o banco de dados:', error);
  }
}

syncModels();

module.exports = {
  sequelize,
  Agendamento
};
