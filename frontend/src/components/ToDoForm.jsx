import { Form, Button } from 'react-bootstrap';
import React from 'react';
import axios from "axios";

const ToDoForm = () => {
  const [tarefa, setTarefa] = React.useState('')
  const [descricao, setDescricao] = React.useState('')
  const [mensagem, setMensagem] = React.useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
  
    try {
      await axios.post('http://localhost:2608/tarefas/', {
        nome: tarefa, descricao: descricao
      })

      setTarefa('')
      setDescricao('')
      setMensagem('Tarefa enviada com sucesso!')
    } catch (error) {
      setMensagem('Não foi possível salvar a sua tarefa')
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="novaTarefa.nomeTarefa">
        <Form.Label>Nome da tarefa</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Ex.: Limpar quarto 012..."
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="novaTarefa.descricaoTarefa">
        <Form.Label>Descrição da tarefa</Form.Label>
        <Form.Control 
          as="textarea" 
          rows={3}
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)} />
      </Form.Group>
      <Button type='submit'>Adicionar tarefa</Button>
      <p className='mt-3'>{mensagem}</p>
    </Form>
  );
}

export default ToDoForm;