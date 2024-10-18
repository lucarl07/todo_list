import { Form, Button } from 'react-bootstrap';

const ToDoForm = () => {
  const handleSubmit = () => {}

  return (
    <Form>
      <Form.Group className="mb-3" controlId="novaTarefa.nomeTarefa">
        <Form.Label>Nome da tarefa</Form.Label>
        <Form.Control type="text" placeholder="Ex.: Limpar quarto 012..." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="novaTarefa.descricaoTarefa">
        <Form.Label>Descrição da tarefa</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button type='submit'>Adicionar</Button>
    </Form>
  );
}

export default ToDoForm;