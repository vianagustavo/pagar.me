# Pagar.me
A fins de estudo, realizei o desafio proposto pela Pagar.me onde a API é feita para gerenciar uma rede de pagamentos. Através da aplicação os clientes podem processar transações (cash-in) e receber pagamentos (cash-out)


# Sumário
1. <a href="#Tecnologias utilizadas">Tecnologias Utilizadas</a>
2. <a href="#Inicializando">Inicializando</a>
3. <a href="#Configurando o Projeto">Configurando o Projeto</a>
4. <a href="#Rodando Testes">Rodando Testes</a>
5. <a href="#API Endpoints">API Endpoints</a>
6. <a href="#Autor">Autor</a>


## Tecnologias Utilizadas

- [NodeJS](https://nodejs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [Postgres](https://www.postgresql.org/)
- [Jest](https://jestjs.io/)

## Inicializando

- Clonar o repositório: `git clone https://github.com/vianagustavo/pagar.me.git`
- Instalar dependências utilizadas no desenvolvimento: `yarn --frozen-lockfile`
- Setar as variáveis de ambiente no .env
- Rodar migrations geradas pelo Prisma: `yarn prisma migrate dev`
- Subir a aplicação localmente: `yarn dev`

## Configurando o Projeto

Setar variáveis de ambiente de acordo

|     Variável    |      Default     |             Notes              |
| --------------- | ---------------- | ------------------------------ |
|     `PORT`      |      `4950`      |     Porta de inicialização     |
|  `DATABASE_URL` |    `Prisma URL`  | URL de Conexão com o Prisma    |


## Rodando Testes

Os testes de integração estão disponíveis para essa aplicação, e o script utilizado para o rodar o Jest pode ser encontrado no `package.json`.

```
# Rodando os testes
$ yarn test

```

## API Endpoints

|  Verbo   |                    Endpoint                     |                 Descrição                  |
| :------- | :---------------------------------------------: | :----------------------------------------: |
| `POST`   |                   `/transactions`               |         Criação de nova transação          |
| `GET`    |                   `/transactions`               |      Listagem de todas as transactions     |
| `POST`   |                    `/payables`                  |        Listagem dos saldos atuais          |
| `GET`    |                    `/api-docs`                  |         Documentação dos endpoints         |

## Autor

- **Gustavo Ferreira Viana**