const validation = (req, res, next) => {
  const { id } = req.params

  if (!id) {
    res.status(400).json({
      err: "A solicitação exige que seja passado um ID."
    })
  }

  const { nome, descricao, status } = req.body

  if (!nome) {
    res.status(400).json({
      err: "O nome da tarefa é obrigatório."
    })
  }
  if (!descricao) {
    res.status(400).json({
      err: "A descrição da tarefa é obrigatória."
    })
  }
  if (!status) {
    res.status(400).json({
      err: "O status da tarefa é obrigatório."
    })
  }

  next();
}

export default validation