const validation = (req, res, next) => {
  const { nome, descricao } = req.body

  if (!nome) {
    return res.status(400).json({
      err: "O nome da tarefa é obrigatório."
    })
  }
  if (!descricao) {
    return res.status(400).json({
      err: "A descrição da tarefa é obrigatória."
    })
  }

  next();
}

export default validation;