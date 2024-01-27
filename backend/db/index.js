// backend/db/index.js

const { Sequelize } = require('sequelize');

// Configurações de conexão com o banco de dados
const sequelize = new Sequelize('sistema_monitoria', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql'
});

// Testando a conexão com o banco de dados
async function testarConexao() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar-se ao banco de dados:', error);
  }
}

// Chame a função testarConexao para testar a conexão
testarConexao();


module.exports = {
  sequelize,
  testarConexao
};
