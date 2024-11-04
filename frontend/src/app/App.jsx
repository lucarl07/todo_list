import React from 'react'
import { Container } from 'react-bootstrap';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';

const App = () => {
  return (
    <Container>
      <ToDoForm />
      <ToDoList />
    </Container>
  )
}

export default App;