function(nombreDelModelo) {
  
}

export const validator = (req, res, next) => {
  const result = nombreDelModelo.valide(req.body);

  if (result.error) {
    return res.status(400).json(result.error.details);
  }

  next();
};
