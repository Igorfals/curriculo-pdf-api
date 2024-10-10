/**
 * Arquivo: database-knex.js
 * Descrição: arquivo responsável por fazer a conexão com o arquivo banco de dados
 * Data: 10/10/2024
 * Author: Igor Ferreira <@igor_fals - instagram>
 */

require('dotenv').config()

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

module.exports = knex;