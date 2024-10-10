const knex = require('../config/database-knex');

const getCurriculo = async () => {
  return await knex('users').select('users.*')
}

module.exports = {
  getCurriculo
}