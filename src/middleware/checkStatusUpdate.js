const validation = (req, res, next) => {
  const { id } = req.params

  if (!id) {
    return res.status(400).json({
      message: "A solicitação exige que seja passado um ID."
    })
  }

  const { status } = req.body

  if (!status) {
    return res.status(400).json({
      message: "É preciso que seja passado, no corpo da requisição, o status atualizado."
    })
  }

  next();
}

export default validation