# Ada - Sistema de Suporte Acadêmico para Agendamento de Monitoria.


<details>
  <summary style="color:#5625a1">Introdução e Funcionalidades</summary>
  
  O Sistema de Gestão de Suporte Acadêmico para Agendamento de Monitoria, denominado Ada, é uma plataforma desenvolvida para facilitar o agendamento e gerenciamento de sessões de tutoria entre monitores e alunos. Principais características incluem:

- ✅ **Agendamento de Sessões de Tutoria:** Facilita o agendamento de sessões de tutoria com monitores disponíveis em diversas disciplinas.
- 📅 **Visualização de Agendamentos:** Oferece uma visualização detalhada dos agendamentos existentes, incluindo disciplina, horário, local e data das sessões de tutoria.
- 📲 **Simulação de Presença Automática:** Permite verificar a presença dos alunos em sala de aula de forma remota, mantendo um ambiente acadêmico engajado e colaborativo.
</details>

<details>
  <summary style="color:#5625a1">Arquitetura de Software</summary>
  
  O Ada possui uma arquitetura de software que garante segurança, manutenabilidade, usabilidade e portabilidade:

- **Segurança:** Implementa medidas robustas de segurança, incluindo restrição de acesso a recursos sensíveis, criptografia de dados e validação de entrada para prevenir vulnerabilidades de segurança, mesmo sem a presença de um sistema de login convencional. Outras medidas foram tomadas para garantir a segurança dos dados e do sistema, proporcionando uma experiência segura para os usuários.
- **Manutenabilidade:** Possui uma arquitetura modular e código bem estruturado para facilitar a manutenção e evolução contínua do software.
- **Usabilidade:** Oferece uma interface intuitiva e fluxos de usuário otimizados para uma experiência amigável.
- **Portabilidade:** Projetado para ser facilmente implantado em diferentes ambientes, garantindo sua adaptabilidade a diversas plataformas.
</details>

<details>
  <summary style="color:#5625a1">Arquitetura de Sistema</summary>
  
  O sistema é composto por várias camadas:

- **Camada de Apresentação:** Esta camada é responsável pela interface com o usuário, incluindo as páginas HTML, arquivos de estilo CSS e scripts JavaScript que compõem o frontend do Ada. Ela é responsável por exibir as informações relevantes ao usuário e capturar sua interação com o sistema.
- **Camada de Lógica de Apresentação:** Responsável por processar a entrada do usuário, controlar o fluxo de informações na interface e coordenar as interações entre o frontend e o backend do sistema. Aqui, os arquivos JavaScript são utilizados para implementar a lógica de apresentação, como a validação de formulários, manipulação de eventos e atualização dinâmica da interface de usuário.
- **Camada de Modelo:** Esta camada representa os dados do sistema e as regras de negócio subjacentes. Utilizando o banco de dados MySQL e a biblioteca Sequelize no backend, esta camada define os modelos de dados, realiza operações de CRUD (Create, Read, Update, Delete) e estabelece relações entre os diferentes tipos de dados no sistema. Aqui são definidas as estruturas de dados que são manipuladas e apresentadas ao usuário.
- **Integrações Externas:** Gerencia a comunicação e integração com outros sistemas ou serviços externos que são utilizados pelo Ada. Isso pode incluir a utilização da biblioteca Axios para realizar requisições HTTP a APIs externas, serviços de autenticação, ou sistemas de envio de emails como o Nodemailer. Essas integrações permitem que o sistema se comunique de forma eficiente e segura com outros sistemas externos, ampliando suas funcionalidades e capacidades.
</details>

<details>
  <summary style="color:#5625a1">Tecnologias Utilizadas</summary>
  
  | Tecnologia         | Descrição                                     |
  |--------------------|-----------------------------------------------|
  | Frontend           | HTML, CSS, JavaScript                         |
  | Backend            | Node.js, Express.js, MySQL, Sequelize, Axios, Body-parser, Dotenv |
  | Outras Tecnologias | Bootstrap, React Router DOM, Nodemailer, Sequelize-cli, Owl Carousel |
</details>


<details>
  <summary style="color:#5625a1">Aspectos de Computação Ubíqua</summary>
  
  O Ada incorpora aspectos de computação ubíqua, incluindo:

- **Dispositivos Móveis:** Acessível por meio de smartphones e tablets, proporcionando flexibilidade e conveniência aos usuários.
- **Gêmeos Digitais:** Aplica um modelo de gêmeo digital para uma representação precisa e em tempo real dos dados do sistema. Isso significa que cada interação do usuário, agendamento de sessão de tutoria e atualização de informações são refletidos instantaneamente no modelo digital do sistema, proporcionando uma visão atualizada e precisa do estado do sistema a qualquer momento.
- **Offloading:** Utiliza o conceito de offloading para melhorar a eficiência e desempenho do sistema, especialmente em dispositivos móveis. Isso significa que determinadas tarefas de processamento pesado, como a geração de relatórios ou o processamento de grandes conjuntos de dados, são transferidas para servidores remotos mais poderosos, aliviando a carga de trabalho nos dispositivos móveis dos usuários. Isso resulta em uma experiência mais ágil e responsiva para os usuários, mesmo em dispositivos com recursos limitados.
- **Continuidade:** O Ada garante uma experiência de usuário consistente entre diferentes dispositivos e plataformas. Isso significa que os usuários podem começar uma tarefa em um dispositivo, como agendar uma sessão de tutoria em um smartphone, e continuar exatamente de onde pararam em outro dispositivo, como um laptop, sem interrupções. Isso é possível graças à sincronização contínua de dados e estado do sistema entre diferentes dispositivos, proporcionando uma experiência fluida e sem atritos para os usuários, independentemente do dispositivo que estão usando.
</details>

<details>
  <summary style="color:#5625a1">Sensor de Geolocalização do Celular - GPS (Global Positioning System)</summary>
  
  O sistema utiliza o sensor de geolocalização do celular (GPS) para a simulação de presença automática do aluno na sala de aula. O funcionamento é baseado na comparação das coordenadas geográficas simuladas com as coordenadas da sala de aula definidas no servidor. Se a distância entre as coordenadas simuladas e as coordenadas da sala de aula for menor que um limite específico, o aluno é considerado presente; caso contrário, é considerado ausente.

![Alt text](image.png)

</details>

----------------
### <span style="color:#5625a1">Funcionalidade inicial implementada</span>

![Alt text](<Home.png>)

![Alt text](<agendamento.png>)

![Alt text](<mobile.png>)
