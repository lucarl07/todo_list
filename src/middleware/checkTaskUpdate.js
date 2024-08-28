const validation = (req, res, next) => {
  const { id } = req.params
  const { nome, descricao, status } = req.body

  if (!id) {
    return res.status(400).json({
      message: "A solicitação exige que seja passado um ID."
    })
  }
  if (!nome) {
    return res.status(400).json({
      message: "O nome da tarefa é obrigatório."
    })
  }
  if (!descricao) {
    return res.status(400).json({
      message: "A descrição da tarefa é obrigatória."
    })
  }
  if (!status) {
    return res.status(400).json({
      message: "O status da tarefa é obrigatório."
    })
  }

  next();
}

export default validation