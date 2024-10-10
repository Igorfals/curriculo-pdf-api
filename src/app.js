/**
 * Arquivo: app.js
 * Descrição: arquivo responsável por fazer a conexão com o arquivo 'server.js'
 * Data: 10/10/2024
 * Author: Igor Ferreira <@igor_fals - instagram>
 */

const express = require('express')

const app = express()
app.use(express.json())

// Rotas da API (Curriculo):
const index = require('./routes/index');
// const curriculoRoutes = require('./routes/routes-curriculo');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(index);
// app.use('/api/', curriculoRoutes);

module.exports = app