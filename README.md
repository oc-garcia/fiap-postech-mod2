# backend-blogging

## Descrição

Este é o backend de um blog escolar, desenvolvido como parte do desafio técnico do módulo 2 da pós-graduação em Tecnologia da FIAP. O projeto é destinado ao uso por professores e alunos.

## Experiência de Desenvolvimento

Durante o desenvolvimento, um dos principais desafios foi a implementação dos testes e a configuração do ambiente em containers utilizando Docker Compose, combinando o PostgreSQL e o servidor em um único container. Após analisar as melhores práticas e o comportamento esperado dos serviços, optamos por separar essas responsabilidades. Decidimos utilizar uma instância gerenciada do PostgreSQL no Render, enquanto o servidor foi mantido em um container isolado. Essa abordagem se mostrou mais eficiente e alinhada com boas práticas, já que containers são efêmeros por natureza, enquanto bancos de dados requerem persistência confiável dos dados, o que seria comprometido se o banco estivesse dentro de um container transitório.

## Arquitetura

O projeto segue uma arquitetura modular e escalável, utilizando as seguintes tecnologias e padrões:

- **Fastify**: Framework web rápido e eficiente para Node.js.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **PostgreSQL**: Banco de dados relacional utilizado para armazenar os dados do blog.
- **JWT (JSON Web Tokens)**: Utilizado para autenticação e autorização.
- **Zod**: Biblioteca de validação de esquemas para validação de dados.
- **Jest**: Framework de testes para garantir a qualidade do código.
- **ESLint e Prettier**: Ferramentas de linting e formatação de código para manter a consistência do código.

A estrutura do projeto é organizada da seguinte forma:

- **src/**: Contém todo o código fonte do projeto.
  - **controllers/**: Contém os controladores que lidam com as requisições HTTP.
  - **entities/**: Contém as definições das entidades do domínio.
  - **repositories/**: Contém as implementações dos repositórios para acesso aos dados.
  - **use-cases/**: Contém os casos de uso que encapsulam a lógica de negócio.
  - **utils/**: Contém utilitários e helpers usados no projeto.
  - **server.ts**: Arquivo de entrada do servidor.

## Como Rodar o Projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/oc-garcia/fiap-postech-mod2.git
   cd fiap-postech-mod2
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Crie um arquivo `.env` com as seguintes variáveis:**

   ```bash
   PORT=
   ENV=
   DATABASE_USER=
   DATABASE_HOST=
   DATABASE_NAME=
   DATABASE_PASSWORD=
   DATABASE_PORT=
   JWT_SECRET=
   DATABASE_URL=
   ```

4. **Rodando em modo de desenvolvimento:**

   ```bash
   npm run start:dev
   ```

5. **Para construir o projeto:**

   ```bash
   npm run build
   ```

6. **Para rodar os testes:**

   ```bash
   npm test
   ```

## Links Úteis

- **Deploy da API:** [https://blogging-back.onrender.com](https://blogging-back.onrender.com) (Instância do POSTGRES foi derrubada após avaliação)
- **Documentação da API:** [https://documenter.getpostman.com/view/27425174/2sA3kdAxqL](https://documenter.getpostman.com/view/27425174/2sA3kdAxqL)
