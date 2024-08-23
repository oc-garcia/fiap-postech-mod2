
# backend-blogging

## Descrição

Este é o backend de um blog escolar, desenvolvido como parte do desafio técnico do módulo 2 da pós-graduação em Tecnologia da FIAP. O projeto é destinado ao uso por professores e alunos.

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

- **Deploy da API:** [https://blogging-back.onrender.com](https://blogging-back.onrender.com)
- **Documentação da API:** [https://documenter.getpostman.com/view/27425174/2sA3kdAxqL](https://documenter.getpostman.com/view/27425174/2sA3kdAxqL)
