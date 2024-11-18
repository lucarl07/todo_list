import axios from "axios";

const updateTask = async (taskId, body) => {
  await axios
    .put(`http://localhost:2608/tarefas/${taskId}`, { data: body })
    .then(({data}) => {
      const msg = data.message
      console.log(msg)
    })
    .catch((error) => {
      console.log(error)
      throw new Error('Um erro ocorreu. Verifique o console para mais informações.')
    })
}

export default updateTask;