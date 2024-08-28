import Tarefa from "../models/taskModel.js"

// Adicionar uma nova tarefa:
export const createNewTask = async (req, res) => {
  const { nome, descricao } = req.body
  const status = "pendente"

  const novaTarefa = { 
    nome, descricao, status 
  }

  try {
    await Tarefa.create(novaTarefa)
    res.status(201).json({
      message: "Tarefa cadastrada com sucesso!"
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      err: "Erro interno ao criar nova tarefa."
    })
  }
}

// Listar tarefas com paginação
export const getTasksByPage = async (req, res) => {
  const page = parseInt(req.query.page) || 1
  const limit = parseInt(req.query.limit) || 10
  const offset = (page - 1) * limit

  try {
    const tarefas = await Tarefa.findAndCountAll({
      limit, offset
    })
    const totalPaginas = Math.ceil(tarefas.count / limit)
    
    res.status(200).json({
      totalTarefas: tarefas.count,
      totalPaginas,
      paginaAtual: page,
      itemsPorPagina: limit,
      proximaPagina: totalPaginas === 0 
        ? null 
        : `${process.env.BASE_URL}/tarefas?page=${page + 1}&limit=${limit}`,
      tarefas: tarefas.rows
    })
  } catch (error) {
    res.status(500).json({
      err: "Erro interno ao buscar tarefas."
    })
  }
}