// Dependencies:
import React from 'react';
import { Table } from 'react-bootstrap';

// API services:
import getTaskList from '../api/getTaskList';

const ToDoList = () => {
  const [tarefas, setTarefas] = React.useState([])
  
  React.useEffect(() => {
    getTaskList(setTarefas)
  }, [])

  return (
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
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default ToDoList;