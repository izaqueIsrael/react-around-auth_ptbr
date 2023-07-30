# React Around Auth (PT-BR)

Este repositório contém o código-fonte de uma aplicação React com autenticação de usuários. A aplicação permite que os usuários façam login, se registrem, editem seus perfis, adicionem, removam e curtam cartões. O projeto utiliza React Router para gerenciar as rotas da aplicação.

## Instalação

Siga os passos abaixo para configurar e executar o projeto localmente:

1. Clone este repositório:

git clone https://github.com/izaqueIsrael/react-around-auth_ptbr.git
cd react-around-auth_ptbr


2. Instale as dependências:

npm i 


3. Inicie o servidor de desenvolvimento:

npm start


O aplicativo será executado em http://localhost:3000 no seu navegador.

## Dependências

O projeto utiliza as seguintes dependências:

- `@testing-library/jest-dom`: Versão ^5.16.5
- `@testing-library/react`: Versão ^13.4.0
- `@testing-library/user-event`: Versão ^13.5.0
- `react`: Versão ^18.2.0
- `react-dom`: Versão ^18.2.0
- `react-hook-form`: Versão ^7.44.0
- `react-router-dom`: Versão ^6.11.2
- `react-scripts`: Versão 5.0.1
- `validator`: Versão ^13.9.0
- `web-vitals`: Versão ^2.1.4

## Funcionalidades

- Os usuários podem se registrar, fazer login e fazer logout.
- Os usuários autenticados têm acesso a uma área protegida onde podem editar seus perfis, adicionar, remover e curtir cartões.
- O aplicativo utiliza a biblioteca `react-hook-form` para a validação dos formulários.
- A aplicação utiliza a API fornecida pelo servidor para interagir com os dados dos usuários e cartões.

## Estrutura do Código

O código está organizado nos seguintes componentes principais:

- `App.js`: Componente raiz da aplicação, que gerencia a autenticação do usuário e controla o roteamento da aplicação usando o `react-router-dom`.
- `contexts/CurrentUserContext.js`: Contexto para gerenciar os dados do usuário autenticado.
- `hooks/UseApp.js`: Custom hook para gerenciar o estado da aplicação e as requisições à API.
- `components/Home.js`: Componente da página inicial com a área protegida, onde o usuário pode editar o perfil, adicionar, remover e curtir cartões.
- `components/Login.js`: Componente para a página de login.
- `components/Register.js`: Componente para a página de registro.
- `components/ProtectedRoute.js`: Componente para a criação de rotas protegidas.
- `components/InfoTooltip.js`: Componente para exibir dicas de informações ao usuário.

## Notas

- O aplicativo possui uma área protegida que só é acessível para usuários autenticados.
- O roteamento é gerenciado pelo `react-router-dom`, o que permite navegar entre diferentes páginas da aplicação.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests para melhorar este projeto.

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.

## Contato

Você pode me encontrar no GitHub: [izaqueIsrael](https://github.com/izaqueIsrael).

---

**Nota**: Este é apenas um exemplo de arquivo README em formato Markdown para o código fornecido. É importante atualizar e personalizar o README de acordo com as necessidades e especificidades do projeto real.
