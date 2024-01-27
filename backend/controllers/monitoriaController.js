// Simulando um banco de dados de monitorias
let monitorias = [];

// Função para agendar uma nova monitoria
const agendarMonitoria = (req, res) => {
    const { aluno, disciplina, data, horario } = req.body;
    const novaMonitoria = { aluno, disciplina, data, horario };
    monitorias.push(novaMonitoria);
    res.status(201).json({ message: 'Monitoria agendada com sucesso!', monitoria: novaMonitoria });
};

// Função para listar todas as monitorias agendadas
const listarMonitorias = (req, res) => {
    res.status(200).json({ monitorias });
};

// Função para encontrar uma monitoria pelo ID
const encontrarMonitoriaPorId = (req, res) => {
    const id = req.params.id;
    const monitoria = monitorias.find(m => m.id === id);
    if (!monitoria) {
        return res.status(404).json({ message: 'Monitoria não encontrada.' });
    }
    res.status(200).json({ monitoria });
};

// Função para atualizar uma monitoria pelo ID
const atualizarMonitoria = (req, res) => {
    const id = req.params.id;
    const { aluno, disciplina, data, horario } = req.body;
    const index = monitorias.findIndex(m => m.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'Monitoria não encontrada.' });
    }
    monitorias[index] = { ...monitorias[index], aluno, disciplina, data, horario };
    res.status(200).json({ message: 'Monitoria atualizada com sucesso!', monitoria: monitorias[index] });
};

// Função para excluir uma monitoria pelo ID
const excluirMonitoria = (req, res) => {
    const id = req.params.id;
    const index = monitorias.findIndex(m => m.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'Monitoria não encontrada.' });
    }
    monitorias.splice(index, 1);
    res.status(200).json({ message: 'Monitoria excluída com sucesso!' });
};

module.exports = {
    agendarMonitoria,
    listarMonitorias,
    encontrarMonitoriaPorId,
    atualizarMonitoria,
    excluirMonitoria
};