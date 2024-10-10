const getCurriculoMiddleware = async (req, res, next) => {
  const { id } = req.query;
  if (!id) {
    return res.status(400).json({
      error: 'Faltando ID na query string.',
    });
  }
  next();
}


module.exports = {
  getCurriculoMiddleware
}