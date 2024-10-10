/**
 * Arquivo: routes/employee-routes.js
 * Descrição: arquivo responsável pelas rotas da API
 * Data: 10/10/2024
 * Author: Igor Ferreira <@igor_fals - instagram>
 */

const express = require('express')

const router = express.Router()

router.get('/api/', (req, res) => {
  res.status(200).send({
    sucesso: 'true',
    message: 'Seja bem-vind(a) a api Node.js + Mysql',
    version: '1.0.0'
  })
})

module.exports = router