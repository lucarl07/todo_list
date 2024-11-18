// Dependencies:
import React from 'react';
import { Form, Button } from 'react-bootstrap';

// API services:
import createTask from '../api/createTask';
import TaskUpdater from './TaskUpdater';

const ToDoForm = () => {
  const [tarefa, updateTarefa] = React.useReducer((prev, next) => {
    return { ...prev, ...next }
  }, { nome: "", descricao: "" })

  const [mensagem, setMensagem] = React.useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    createTask(tarefa, updateTarefa, setMensagem)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="novaTarefa.nomeTarefa">
        <Form.Label>Nome da tarefa</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Ex.: Limpar quarto 012..."
          value={tarefa.nome}
          onChange={(e) => updateTarefa({...tarefa, nome: e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="novaTarefa.descricaoTarefa">
        <Form.Label>Descrição da tarefa</Form.Label>
        <Form.Control 
          as="textarea" 
          rows={3}
          value={tarefa.descricao}
          onChange={(e) => updateTarefa({...tarefa, descricao: e.target.value})} />
      </Form.Group>
      
      <Button type='submit'>Adicionar tarefa</Button>

      <p className='mt-3'>{mensagem}</p>
    </Form>
  );
}

export default ToDoForm;