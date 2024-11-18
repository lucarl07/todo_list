import axios from "axios";

const updateTask = async (taskId, body) => {
  await axios
    .put(`http://localhost:2608/tarefas/${taskId}`, {...body})
    .then(({data}) => {
      const msg = data.message
      window.alert(msg)
    })
    .catch((error) => {
      window.alert(error)
      throw new Error(error)
    })
}

export default updateTask;