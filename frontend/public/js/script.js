document.addEventListener('DOMContentLoaded', function () {
    const openModalButtons = document.querySelectorAll('.schedule_button');
    const modal = document.getElementById('modal');
    const closeModalButton = document.querySelector('.modal .close');

    openModalButtons.forEach(button => {
        button.addEventListener('click', function () {
            modal.style.display = 'block';
            const disciplina = button.getAttribute('data-disciplina');
            const horario = button.getAttribute('data-horario');
            const local = button.getAttribute('data-local');
            const monitor = button.getAttribute('data-monitor');
            const data = button.getAttribute('data-data');

            document.getElementById('modal-text').textContent = `Disciplina: ${disciplina}, Horário: ${horario}, Local: ${local}, Monitor: ${monitor}`;
            document.getElementById('disciplinaInput').value = disciplina;
            document.getElementById('horarioInput').value = horario;
            document.getElementById('localInput').value = local;
            document.getElementById('monitorInput').value = monitor;
            document.getElementById('dataInput').value = data;
        });
    });

    // Função para verificar a disponibilidade com base na data selecionada
    function verificarDisponibilidade(monitorId, dataSelecionada) {
        // Suponha que você tenha uma estrutura de dados que armazena a disponibilidade dos monitores
        // Você pode substituir isso pela lógica real de acesso à fonte de dados
        const disponibilidadeDosMonitores = {
            '01': {
                '2024-02-01': ['10:00 AM', '11:00 AM', '2:00 PM'],
                '2024-02-02': ['9:00 AM', '3:00 PM'],
                // Adicione mais datas e horários conforme necessário
            },
            '02': {
                '2024-02-01': ['11:00 AM', '1:00 PM', '3:00 PM'],
                '2024-02-02': ['10:00 AM', '2:00 PM'],
                // Adicione mais datas e horários conforme necessário
            },
            // Adicione mais monitores conforme necessário
        };

        // Verifique se o monitorId existe na estrutura de dados
        if (monitorId in disponibilidadeDosMonitores) {
            // Verifique se a dataSelecionada existe para o monitor
            if (dataSelecionada in disponibilidadeDosMonitores[monitorId]) {
                // Retorne os horários disponíveis para a data selecionada
                return disponibilidadeDosMonitores[monitorId][dataSelecionada];
            }
        }

        // Se a data não existir ou o monitor não existir, retorne um array vazio
        return [];
    }

    // Função para mostrar a disponibilidade
    function mostrarDisponibilidade(disponibilidade) {
        const disponibilidadeModal = document.getElementById('disponibilidade-modal');
        const disponibilidadeList = document.getElementById('disponibilidade-list');

        if (disponibilidade.length > 0) {
            // Se houver horários disponíveis, exiba-os no modal
            disponibilidadeModal.style.display = 'block';
            disponibilidadeList.innerHTML = '';
            disponibilidade.forEach(horario => {
                const listItem = document.createElement('li');
                listItem.textContent = horario;
                disponibilidadeList.appendChild(listItem);
            });
        } else {
            // Se não houver horários disponíveis, exiba uma mensagem ao usuário
            disponibilidadeModal.style.display = 'block';
            disponibilidadeList.innerHTML = 'Nenhum horário disponível para esta data.';
        }
    }

    closeModalButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    document.getElementById('modal-form').addEventListener('submit', function (event) {
        event.preventDefault();
    
        const nome = document.getElementById('nomeInput').value;
        const email = document.getElementById('emailInput').value;
        const disciplina = document.getElementById('disciplinaInput').value;
        const horario = document.getElementById('horarioInput').value;
        const local = document.getElementById('localInput').value;
        const monitor = document.getElementById('monitorInput').value;
        const data = document.getElementById('dataInput').value;
    
        const novoAgendamento = {
            nome: nome,
            email: email,
            disciplina: disciplina,
            horario: horario,
            local: local,
            monitor: monitor,
            data: data
        };
    
        fetch('http://localhost:3000/api/agendamentos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoAgendamento)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao adicionar novo agendamento');
            }
            return response.json();
        })
        .then(data => {
            console.log('Novo agendamento adicionado:', data);
            alert('Agendamento realizado com sucesso!');
            modal.style.display = 'none'; // Fechar o modal após o agendamento ser salvo com sucesso
            window.location.href = 'meusAgendamentos.html'; // Redirecionar para a página de Meus Agendamentos
        })
        .catch(error => {
            console.error('Erro ao adicionar novo agendamento:', error);
            alert(error.message);
        });
    });       
});

