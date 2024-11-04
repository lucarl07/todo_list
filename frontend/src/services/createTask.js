import axios from "axios";

const createTask = async (task, updateTask, setMessage) => {
  try {
    await axios.post('http://localhost:2608/tarefas/', {
      nome: task.nome, 
      descricao: task.descricao
    })
    updateTask({ nome: "", descricao: "" })
    setMessage('Tarefa enviada com sucesso!')
  } catch (error) {
    setMessage('Não foi possível salvar a sua tarefa')
  }
}

export default createTask;