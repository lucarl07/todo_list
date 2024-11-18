import { useReducer } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
import updateTask from '../api/updateTask';

const TaskUpdater = ({ taskId, state, onHide }) => {
  const [body, updateBody] = useReducer((prev, next) => {
    return { ...prev, ...next };
  }, { 
    nome: '', descricao: '', status: ''
  });

  const onUpdate = () => {
    updateTask(taskId, body)
    onHide()
  }
  const isSelectBlank = (body.status) && (body.status != "Selecione o status") ? false : true

  return (
    <Modal show={state} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Atualizar tarefa</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="atualizarTarefa.nomeTarefa">
            <Form.Label>Nome:</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Ex.: Trocar ar-condicionado..."
              value={body.nome}
              onChange={(e) => updateBody({ nome: e.target.value})} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="atualizarTarefa.descricaoTarefa">
            <Form.Label>Descrição:</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={3}
              value={body.descricao}
              onChange={(e) => updateBody({ descricao: e.target.value })} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="atualizarTarefa.statusTarefa">
            <Form.Label>Status:</Form.Label>
            <Form.Select 
              value={body.status}
              onChange={(e) => updateBody({ status: e.target.value })}>
              <option>Selecione o status</option>
              <option value="pendente">Pendente</option>
              <option value="concluida">Concluída</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger" onClick={onHide}>
          Fechar janela
        </Button>
        <Button variant="primary" onClick={onUpdate} disabled={isSelectBlank}>
          Enviar alterações
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TaskUpdater;