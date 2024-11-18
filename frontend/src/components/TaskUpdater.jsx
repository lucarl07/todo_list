import React from 'react'
import { Button, Modal, Form, Dropdown } from 'react-bootstrap';
import updateTask from '../api/updateTask';

const TaskUpdater = ({ taskId, state, onHide }) => {
  const [body, updateBody] = React.useReducer((prev, next) => {
    return { ...prev, ...next };
  }, { 
    nome: '', descricao: '', status: ''
  });

  // const onUpdate = () => {
  //   updateTask(taskId, body)
  //   onHide()
  // }

  return (
    <Modal show={state} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Atualizar tarefa</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="novaTarefa.nomeTarefa">
            <Form.Label>Nome:</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Ex.: Limpar quarto 012..."
              value={body.nome}
              onChange={(e) => updateTarefa({ nome: e.target.value})} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="novaTarefa.descricaoTarefa">
            <Form.Label>Descrição:</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={3}
              value={body.descricao}
              onChange={(e) => updateTarefa({ descricao: e.target.value})} />
          </Form.Group>

          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/">Action</Dropdown.Item>
              <Dropdown.Item href="#/">Another action</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Fechar
        </Button>
        <Button variant="primary" onClick={onHide}>
          Salvar alterações
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TaskUpdater;