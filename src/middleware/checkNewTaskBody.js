const validation = (req, res, next) => {
  const { nome } = req.body

  if (!nome) {
    return res.status(400).json({
      err: "O nome da tarefa é obrigatório."
    })
  }

  next();
}

export default validation;