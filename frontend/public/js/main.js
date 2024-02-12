//main.js
document.getElementById('agendarForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    // Obter os valores do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const data = document.getElementById('data').value;

    try {
        // Enviar os dados para o backend
        const response = await fetch('/api/monitores/agendar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, email, data })
        });

        if (response.ok) {
            // Se a resposta for bem-sucedida, exiba uma mensagem de sucesso
            alert('Monitoria agendada com sucesso!');
            // Limpar campos do formulário
            document.getElementById('agendarForm').reset();
        } else {
            // Caso contrário, exiba uma mensagem de erro com base na resposta do servidor
            const errorMessage = await response.text();
            alert(`Erro ao agendar monitoria: ${errorMessage}`);
        }
    } catch (error) {
        // Se ocorrer um erro durante a solicitação, exiba o erro no console e uma mensagem de erro para o usuário
        console.error('Erro ao enviar solicitação:', error);
        alert('Erro ao agendar monitoria. Por favor, tente novamente.');
    }
});
