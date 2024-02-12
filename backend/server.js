const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const nodemailer = require('nodemailer');
// const twilio = require('twilio');
require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

const app = express();
const port = 3000;

// Configura o bodyParser para analisar dados de formulário
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static('public'));

// Array para armazenar os agendamentos (simulando um banco de dados temporário)
let agendamentos = [];

app.post('/api/agendamentos', (req, res) => {
    const { disciplina, horario, local, monitor, data } = req.body;
    if (!disciplina || !horario || !local || !monitor || !data) {
        return res.status(400).send('Todos os campos são obrigatórios');
    }

    const novoAgendamento = { disciplina, horario, local, monitor, data };
    agendamentos.push(novoAgendamento); // Supondo que `agendamentos` é um array

    console.log('Novo agendamento adicionado:', novoAgendamento);
    res.status(201).json(novoAgendamento);
});


app.get('/api/meusAgendamentos', (req, res) => {
    res.status(200).json(agendamentos);

});

const salaDeAulaCoordinates = { latitude: -16.603528706864058, longitude: -49.26650560989817 };

app.post('/marcar-presenca', (req, res) => {
    const { latitude, longitude } = req.body;

    // Simula a verificação se as coordenadas do aluno estão dentro da área da sala de aula
    const isDentroDaSalaDeAula = verificarPresencaNaSalaDeAula(latitude, longitude);

    if (isDentroDaSalaDeAula) {
        console.log('Aluno em sala de aula');
        res.status(200).json({ message: 'Aluno em sala de aula' });
    } else {
        console.log('Aluno não está em sala de aula');
        res.status(400).json({ message: 'Aluno não está em sala de aula' });
    }
});

function verificarPresencaNaSalaDeAula(latitude, longitude) {
    // Verifica se as coordenadas do aluno estão dentro da área da sala de aula
    const dentroDaSalaDeAula = (latitude === salaDeAulaCoordinates.latitude && longitude === salaDeAulaCoordinates.longitude);
    return dentroDaSalaDeAula;
}

// Rota para simular a marcação de presença do aluno
app.post('/marcar-presenca', (req, res) => {
    // Simula a presença do aluno gerando um valor aleatório (true ou false)
    const presente = Math.random() < 0.5; // 50% de chance de estar presente
    
    // Retorna a resposta com o status correspondente
    if (presente) {
        console.log('Aluno em sala de aula');
        res.status(200).json({ presente: true });
    } else {
        console.log('Aluno ausente da sala de aula');
        res.status(404).json({ presente: false });
    }
});

// // Iniciar o servidor
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Servidor rodando na porta ${PORT}`);
// });

// Iniciar o servidor quando utilizo o celular
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT} e aceitando conexões de qualquer dispositivo na rede`);
});


// Script para enviar coordenadas simuladas automaticamente para o servidor
app.post('/marcar-presenca', (req, res) => {
    const { latitude, longitude } = req.body;

    // Coordenadas da sala de aula simulada
    const classroomLatitude = -16.603528706864058;
    const classroomLongitude = -49.26650560989817;

    // Simulação: Verificar se as coordenadas recebidas estão próximas da sala de aula
    const distancia = calcularDistancia(latitude, longitude, classroomLatitude, classroomLongitude);

    if (distancia < 0.001) { // Ajuste o valor conforme necessário para definir a proximidade da sala de aula
        console.log('Aluno está em sala de aula');
        res.status(200).send('Aluno está em sala de aula');
    } else {
        console.log('Aluno não está em sala de aula');
        res.status(400).send('Aluno não está em sala de aula');
    }
});

// Função para calcular a distância entre duas coordenadas geográficas (em km)
function calcularDistancia(lat1, lon1, lat2, lon2) {
    const R = 6371; // Raio da Terra em km
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distancia = R * c;
    return distancia;
}

// Função auxiliar para converter graus em radianos
function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}


