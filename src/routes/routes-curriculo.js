/**
 * Arquivo: routes/employee-routes.js
 * Descrição: arquivo responsável pelas rotas da API
 * Data: 25/09/2024
 * Author: Igor Ferreira <@igor_fals - instagram>
 */

const express = require('express');
const router = express.Router();
const controller = require('../controllers/curriculo-controllers');

router.get('/curriculo', controller.getCurriculo);

module.exports = router;