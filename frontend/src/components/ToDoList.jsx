// Dependencies:
import React from 'react';
import { Button, Table } from 'react-bootstrap';

// API services:
import getTaskList from '../api/getTaskList';

// Components:
import TaskUpdater from './TaskUpdater';

const ToDoList = () => {
  const [tarefas, setTarefas] = React.useState([])
  const [show, setShow] = React.useState(false);
  const [taskId, setTaskId] = React.useState("")

  const handleClose = () => {
    setTaskId("")
    setShow(false)
  };
  const handleShow = (id) => {
    setTaskId(id)
    setShow(true)
  };
  
  React.useEffect(() => {
    getTaskList(setTarefas)
  }, [])

  return (
    <>
      <TaskUpdater
        taskId={taskId}
        state={show}
        onHide={handleClose} />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((tarefa, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{tarefa.nome}</td>
              <td>{tarefa.descricao}</td>
              <td>{tarefa.status}</td>
              <td>
                <Button variant="primary" onClick={() => handleShow(tarefa.tarefa_id)}>
                  Atualizar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default ToDoList;