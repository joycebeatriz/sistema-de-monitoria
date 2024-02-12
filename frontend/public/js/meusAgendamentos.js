document.addEventListener('DOMContentLoaded', function () {
  // Exibe a notificação
  const notification = document.getElementById('notification');
  notification.style.display = 'block';
  // Configura um tempo para a notificação desaparecer
  setTimeout(() => {
    notification.style.display = 'none';
  }, 5000); // A notificação desaparece após 5 segundos

  fetchAgendamentos();

  function fetchAgendamentos() {
    fetch('http://localhost:3000/api/meusAgendamentos')
      .then(response => response.json())
      .then(agendamentos => displayAgendamentos(agendamentos))
      .catch(error => console.error('Erro ao buscar agendamentos:', error));
  }

  function displayAgendamentos(agendamentos) {
    const container = document.querySelector('.service_container'); // Ajuste se necessário
    container.innerHTML = ''; // Limpa o container antes de adicionar novos agendamentos

    agendamentos.forEach(agendamento => {
      const agendamentoElement = document.createElement('div');
      agendamentoElement.classList.add('agendamento-box');
      agendamentoElement.innerHTML = `
          <h4>${agendamento.disciplina}</h4>
          <p>Horário: ${agendamento.horario}</p>
          <p>Local: ${agendamento.local}</p>
          <p>Monitor: ${agendamento.monitor}</p>
          <p>Data: ${agendamento.data ? agendamento.data : 'Não informado'}</p>
        `;
      container.appendChild(agendamentoElement);
    });

  }
});

const areaMonitoria = {
  latitude: -16.603528706864058,
  longitude: -49.26650560989817,
  raio: 50, // Raio em metros da área da sala de monitoria
};

// Função para verificar presença automática
function verificarPresencaAutomatica(coordenadasAluno) {
  // Calculando a distância usando a diferença absoluta das coordenadas
  const distanciaHorizontal = Math.abs(coordenadasAluno.latitude - areaMonitoria.latitude);
  const distanciaVertical = Math.abs(coordenadasAluno.longitude - areaMonitoria.longitude);

  // Se a distância horizontal e vertical for menor que o raio, o aluno está dentro da área de monitoria
  return distanciaHorizontal <= areaMonitoria.raio && distanciaVertical <= areaMonitoria.raio;
}

// Coordenadas fictícias de um aluno próximo à área de monitoria
const coordenadasAluno = {
  latitude: -16.6036,
  longitude: -49.2664,
};

// Verificar se o aluno está presente na área de monitoria
const presente = verificarPresencaAutomatica(coordenadasAluno);

if (presente) {
  console.log('Aluno em sala de aula.'); // Imprimir no terminal apenas quando o aluno estiver presente na sala de monitoria
} else {
  console.log('Aluno não em sala de aula.');
}

// Alterar a cor do card para verde se o aluno estiver presente na sala de monitoria
const box = document.getElementById('card');

if (presente) {
  card.style.backgroundColor = 'green'; // Alterar a cor do card para verde
}