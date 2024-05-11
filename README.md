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

2 - Entrando no projeto e instalando dependências

```bash
cd minhas-notas-api
git clone https://github.com/gabriel-augg/wonder-api
```

3 - Configurando o banco de dados

Você deve consultar um video no youtube sobre o tema, pois é mais fácil configurar um banco de dados MySQL pelo youtube.


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

### Iniciando o projeto

```bash
npm start
```

## 📍 API Endpoints​

Para acessar a documentação completa da API clique [aqui](https://documenter.getpostman.com/view/33182163/2sA3JNZevD).

/AUTH

| routes               | description
|----------------------|-----------------------------------------------------
| <kbd>POST /auth/signup</kbd>     | retorna o token do usuário logado
| <kbd>POST /auth/signin</kbd>     | retorna o token do usuário logado

/USERS

| routes               | description
|----------------------|-----------------------------------------------------
| <kbd>GET /users/checkuser</kbd> <kbd>Protegida</kbd>    | retorna os dados do usuário do logado
| <kbd>PUT /users/update</kbd> <kbd>Protegida</kbd>     | atualiza a conta e os dados do usuário logado
| <kbd>DELETE /users/delete</kbd> <kbd>Protegida</kbd>     | deleta a conta e os dados do usuário logado

/NOTES

| routes               | description
|----------------------|-----------------------------------------------------
| <kbd>GET /notes</kbd> <kbd>Protegida</kbd>     | retorna todas as notas do usuário logado
| <kbd>POST /notes/create</kbd> <kbd>Protegida</kbd>    | cria uma nova nota e retorna os dados da nota criada
| <kbd>PUT /notes/:id/update</kbd> <kbd>Protegida</kbd>     | atualiza e retorna os dados atualizados da nota com base no id
| <kbd>DELETE /notes/:id/delete</kbd> <kbd>Protegida</kbd>     | deleta a nota com base no id

/TAGS

| routes               | description
|----------------------|-----------------------------------------------------
| <kbd>GET /tags</kbd> <kbd>Protegida</kbd>    | retorna todas as tags do usuário logado
| <kbd>POST /tags/create</kbd> <kbd>Protegida</kbd>     | retorna todas as tags do usuário logado
| <kbd>PATCH /tags/:id/update</kbd> <kbd>Protegida</kbd>     | atualiza e retorna os dados atualizados da tag com base no id
| <kbd>DELETE /tags/:id/delete</kbd> <kbd>Protegida</kbd>     | deleta a tag com base no id





 
