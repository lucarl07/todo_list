import Tarefa from "../models/taskModel.js"

// Buscar por todas as tarefas:
export const getAllTasks = async (req, res) => {
  try {
    const tarefas = await Tarefa.findAll()
    res.status(200).json(tarefas)
  } catch (error) {
    res.status(500).json({
      err: "Erro interno ao listar tarefas."
    })
  }
}
