import './App.css'

function App() {

  const element = <div>Olá Joyce!</div>;

  //Horários disponíveis para monitoria
  const horariosDisponiveis = [
    {dia: 'segunda', horarios: ['8:00'], monitor: 'João'},
    {dia: 'terça', horarios: ['10:00'], monitor: 'Luana'},
    {dia: 'quarta', horarios: ['13:00'], monitor: 'Pedro'},
  ];
  
  // Renderiza os horários disponíveis

  const renderHorariosDisponiveis = (horariosDisponiveis) => {
  return horariosDisponiveis.map((horario, index) => (
    <div key={index}> 
      <p><strong>Dia:</strong> {horario.dia}</p>
      <p><strong>Horários:</strong> {horario.horarios}</p>
      <p><strong>Monitor:</strong> {horario.monitor}</p>
      <button onClick = {() => agendaMonitoria(horario)}>Agendar</button>
    </div>
  ));
  };
  
  // Agenda monitoria

  const agendaMonitoria = (horario) => {
    console.log(`Agendou monitoria para o ${horario.dia} às ${horario.horarios} com o monitor ${horario.monitor}`);
  };

  return (
    <div>
      <h1>Agendamento de monitoria</h1>
      {renderHorariosDisponiveis(horariosDisponiveis)}
    </div>
  );
}

export default App;

