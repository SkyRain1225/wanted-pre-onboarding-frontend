import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { instanceAuth } from '../api/api';
import TodoCreate from '../components/Todo/TodoCreate';
import TodoList from '../components/Todo/TodoList';

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const handleDelete = (id) => {
    instanceAuth
      .delete(`/todos/${id}`)
      .then((res) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    instanceAuth.get('/todos').then((res) => {
      setTodos(res.data);
    });
  }, []);

  return (
    <Container>
      <div className="content-wrapper">
        <TodoCreate todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} handleDelete={handleDelete} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > .content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    border: 1px solid #e6e6e6;
    border-radius: 0.3rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;

export default Todo;
