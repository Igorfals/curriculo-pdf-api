const service = require('../database/db-curriculo');

const getCurriculo = async (req, res) => {
  try {
    const getCurriculo = await service.getCurriculo(req.query);
    res.status(200).send({ getCurriculo });
  } catch (error) {
    console.log(error)
    return res.status(500).send({ error: 'Erro no servidor' });
  }
};

module.exports = {
  getCurriculo,
};
