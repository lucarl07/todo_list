import axios from "axios"

const getTaskList = async (setter, page = 1, limit = 10) => {
  await axios
    .get(`http://localhost:2608/tarefas?page=${page}&limit=${limit}`)
    .then((response) => {
      const tasks = response.data.tarefas.map((tarefa) => {
        return {
          ...tarefa,
          createdAt: new Date(tarefa.createdAt),
          updatedAt: new Date(tarefa.updatedAt),
        }
      })

      tasks.sort((a, b) => a.createdAt - b.createdAt)
      setter(tasks)
    })
    .catch((error) => {
      console.log(error)
      throw new Error('Erro interno na obtenção das tarefas')
    })
}

export default getTaskList;