Desafio Front-End: Galeria de Fotos dos Rovers de Marte

Este projeto foi desenvolvido como parte do processo seletivo para a vaga de Front-End na Valcann Cloud Intelligence. A aplicação consiste numa página interativa que permite aos utilizadores explorar imagens capturadas pelos rovers da NASA em Marte.

Funcionalidades Implementadas
A aplicação cumpre todos os requisitos obrigatórios do desafio:

Layout Completo: Estrutura com Cabeçalho, secção de conteúdo principal e Rodapé.

Galeria de Imagens: Exibição das fotos em grelha, com informações detalhadas em cada card (Rover, Câmara e Data Terrestre).

Filtros Dinâmicos:

Seleção de Rover: Permite alternar entre Curiosity, Opportunity e Spirit.

Seleção de Câmara: O seletor de câmara é preenchido dinamicamente com as câmaras disponíveis para o rover selecionado.

Seleção de Data: Um seletor de data única com botões de navegação para avançar ou retroceder um dia, facilitando a exploração.

Paginação: Navegação entre páginas de resultados para explorar grandes conjuntos de fotos.

Tratamento de Erros e Robustez:

Lida com links de imagem quebrados retornados pela API, exibindo uma imagem de placeholder para não quebrar a interface.

O estado da aplicação é gerido através dos parâmetros da URL, permitindo que links com filtros aplicados sejam partilhados.

Tecnologias Utilizadas
Next.js 15 (App Router): Framework React para renderização no servidor e componentes de cliente.

TypeScript: Para garantir a segurança de tipos e a qualidade do código.

Tailwind CSS: Para uma estilização rápida, moderna e responsiva.

Server Actions: Para uma comunicação segura e eficiente entre o cliente e o servidor na busca de dados.

Como Executar o Projeto Localmente
Siga os passos abaixo para configurar e executar a aplicação no seu ambiente de desenvolvimento.

1. Clonar o Repositório

git clone []
cd nome-da-pasta-do-projeto

2. Instalar as Dependências

npm install

3. Configurar a Chave da API da NASA

A aplicação requer uma chave de API para comunicar com os serviços da NASA.

Crie um ficheiro chamado .env.local na raiz do projeto.

Dentro deste ficheiro, adicione a sua chave de API no seguinte formato:

NASA_API_KEY=SUA_CHAVE_DE_API_AQUI

4. Executar o Servidor de Desenvolvimento

npm run dev

Abra http://localhost:3000 no seu navegador para ver a aplicação.

Desafios Encontrados e Soluções
Durante o desenvolvimento, foram encontrados alguns desafios relacionados com a API da NASA:

Limitações da API: A API não suporta a busca por um intervalo de datas, apenas por um dia específico. A solução foi implementar um seletor de data única com botões de navegação para uma melhor experiência de exploração.

Inconsistência de Dados: Especialmente para os rovers mais antigos (Spirit e Opportunity), a API retorna muitos registos de fotos com links de imagem (img_src) quebrados. Para contornar isso, foi criado um componente de imagem "inteligente" que exibe uma imagem de placeholder sempre que a imagem original falha ao carregar, garantindo a robustez da interface.