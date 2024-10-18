const validation = (req, res, next) => {
  const { id } = req.params

  if (!id) {
    return res.status(400).json({
      message: "A solicitação exige que seja passado um ID."
    })
  }

  next();
}

export default validation