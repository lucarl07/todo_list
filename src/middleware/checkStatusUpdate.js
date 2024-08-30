const validation = (req, res, next) => {
  const { id } = req.params

  if (!id) {
    return res.status(400).json({
      message: "A solicitação exige que seja passado um ID."
    })
  }

  const { status } = req.query
  
  if (!status) {
    return res.status(400).json({
      message: "O status da tarefa é obrigatório."
    })
  }

  next();
}

export default validation