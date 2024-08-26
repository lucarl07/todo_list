const checkTaskFields = (req, res, next) => {
  const { tarefa, descricao } = req.body

  if (!tarefa) {
    res.status(400).json({
      err: "O nome da tarefa é obrigatório."
    })
  }
  if (!descricao) {
    res.status(400).json({
      err: "A descrição da tarefa é obrigatória."
    })
  }

  next();
}

export default checkTaskFields;