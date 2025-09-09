UniverseEx - Galeria de Fotos dos Rovers de Marte

Este projeto é uma solução para o desafio de front-end proposto pela Valcann Cloud Intelligence. A aplicação permite aos utilizadores visualizar, filtrar e navegar por fotografias de Marte, capturadas pelos rovers da NASA, através de uma interface limpa e reativa.

Funcionalidades Principais:
Galeria de Imagens Dinâmica: As imagens são consumidas em tempo real a partir da API oficial da NASA (Mars Rover Photos).

Filtros Avançados:

Seleção de Rover: Escolha entre os rovers Curiosity, Opportunity e Spirit.

Seleção de Câmera: A lista de câmaras é atualizada dinamicamente com base no rover selecionado.

Seleção de Data: Um seletor de data com botões de navegação rápida para explorar dias adjacentes.

Paginação: Navegue facilmente entre as páginas de resultados.

Experiência do Utilizador Polida:

Skeleton Loading: Um elegante skeleton loader é exibido enquanto as novas imagens são carregadas, melhorando a percepção de performance.

Tratamento de Imagens Quebradas: Se a API retornar um link de imagem inválido (comum nos rovers mais antigos), um placeholder visual é exibido no lugar, evitando ícones de imagem quebrada.

Design Responsivo: A interface adapta-se a diferentes tamanhos de ecrã, desde telemóveis a desktops.

Tecnologias Utilizadas:
Framework: Next.js 15 (App Router)

Linguagem: TypeScript

Estilização: Tailwind CSS

Gestão de Estado (Cliente): Hooks do React (useState, useEffect, useTransition)

Comunicação com API: Server Actions do Next.js para chamadas seguras à API da NASA.

Linting: ESLint

Como Executar o Projeto Localmente:
Para executar este projeto no seu ambiente de desenvolvimento, siga os passos abaixo.

Pré-requisitos:
Node.js (versão 18 ou superior)

Uma chave de API da NASA. Pode obter uma gratuitamente em api.nasa.gov.

Passos para Instalação
Clone o repositório:

git clone https://github.com/Henrique-Veloso/desafio-valcann-frontend
cd nome-da-pasta-do-projeto

Instale as dependências:

npm install

Configure as variáveis de ambiente:

Crie um ficheiro chamado .env.local na raiz do projeto.

Adicione a sua chave da API da NASA a este ficheiro:

NASA_API_KEY=SUA_CHAVE_API_VEM_AQUI

Inicie o servidor de desenvolvimento:

npm run dev

Abra a aplicação no navegador:
Aceda a http://localhost:3000 para ver a aplicação em funcionamento.

Desenvolvido por Henrique Matheus Veloso da Silva