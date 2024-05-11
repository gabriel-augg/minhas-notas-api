# MINHAS-NOTAS-API RESTFul

Esta API foi desenvolvida seguindo os padrões REST, e foi feita em conjunto com o projeto Wonder.

Minhas notas é uma aplicação de gerenciamento de notas, sua abordagem é semelhante ao Google Keep. No total há 3 CRUDs, sendo eles seguindo o modelo: USER, NOTE e TAG.

Clique [aqui](https://github.com/gabriel-augg/minhas-notas) para mais informações sobre o projeto Minhas notas.

## 💻 Tecnologias

- JavaScript
- Express
- Sequelize
- MySQL
- MVC
- JWT
- Bcrypt
- CORS

## 🚀 Getting started

Para rodar esta API localmente, é necessério fazer clone do projeto, instalar todas as suas dependências, configurar variáveis de ambiente e configurar o banco de dados localmente.

### Requisitos

- Git
- Node
- NPM
- MySQL

### Clonando o repositório, instalando as dependências e configurando o banco de dados.

1 - Clonando o repositório

```bash
git clone https://github.com/gabriel-augg/wonder-api
```

2 -Instalando as dependências

```bash
cd minhas-notas-api
git clone https://github.com/gabriel-augg/wonder-api
```

3 - Configurando o banco de dados

Você deve consultar um video no youtube sobre o tema, pois é mais fácil de configurar um banco de dados MySQL pelo youtube.

### Configurando variáveis .env

Crie um arquivo .env no raiz  do repositório e defina as seguintes variáveis:

```yaml
PORT=3000

DB_NAME="minhas-notas"

SERVER_USERNAME="root"

SERVER_HOST="localhost"

SERVER_PORT=3306

SERVER_PASSWORD=""
```

Defina os valores das variáveis de acordo com as suas configurações.

### Iniciando

```bash
npm start
```

## 📍 API Endpoints​

/AUTH

| routes               | description
|----------------------|-----------------------------------------------------
| <kbd>POST /auth/sign-up</kbd>     | retorna o token do usuários.
| <kbd>POST /auth/sign-in</kbd>     | retorna o token do usuários.

/USERS

| routes               | description
|----------------------|-----------------------------------------------------
| <kbd>GET /users/check-user</kbd> <kbd>Protegida</kbd>    | retorna os dados do usuário do logado.
| <kbd>PUT /users/update-user</kbd> <kbd>Protegida</kbd>     | atualiza as informações do usuário.
| <kbd>PUT /users/delete-user</kbd> <kbd>Protegida</kbd>     | Deleta a conta do usuário logado.

/NOTES

| routes               | description
|----------------------|-----------------------------------------------------
| <kbd>GET /notes/create</kbd> <kbd>Protegida</kbd>    | retorna os dados da nota criada.
| <kbd>POST /notes/get-posts</kbd> <kbd>Protegida</kbd>     | retorna todas as notas do usuário logado.
| <kbd>PUT /notes/update/:id</kbd> <kbd>Protegida</kbd>     | retorna os dados atualizados da nota com base no id.
| <kbd>PUT /notes/delete/:id</kbd> <kbd>Protegida</kbd>     | deleta uma nota com base no id.

/TAGS

| routes               | description
|----------------------|-----------------------------------------------------
| <kbd>GET /tags/create-tag</kbd> <kbd>Protegida</kbd>    | retorna os dados da tag criada.
| <kbd>POST /notes/get-tags</kbd> <kbd>Protegida</kbd>     | retorna todas as tags do usuário logado.
| <kbd>PUT /notes/update-tag/:id</kbd> <kbd>Protegida</kbd>     | retorna os dados atualizados da tag com base no id.
| <kbd>PUT /notes/delete-tag/:id</kbd> <kbd>Protegida</kbd>     | deleta uma tag com base no id.





 
