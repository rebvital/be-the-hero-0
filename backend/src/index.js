const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333); 

/**
 * rota / recurso
 */

/**
 * Metodos HTTP:
 * 
 * GET: buscar/listar informação do back-end
 * POST: criar uma informção no backend
 * PUT: Alterar uma informação do back-end
 * DELETE: deletar informação do backe-nd
 */
/**
 * Tipos de parametros:
 * Query: parametros nomeados enviados na rota apos o "?" (filtros, paginação)
 * Route Params: ultilizados para indetificar recursos
 * Request Body: corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */
 /** Formas de fazer comunicação com o banco de dados
  * Driver: SELECT * FROM users
  * Query Builder(KNEX): table('users).select('*').where
  */
 


