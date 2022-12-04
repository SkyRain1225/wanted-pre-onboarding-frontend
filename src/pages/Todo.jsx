import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { instance, instanceAuth } from '../api/api';
import TodoCreate from '../components/Todo/TodoCreate';
import TodoList from '../components/Todo/TodoList';

const Todo = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState(undefined);

  const handleDelete = (id) => {
    instanceAuth
      .delete(`/todos/${id}`)
      .then((res) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
      })
      .catch((err) => console.log(err));
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      instanceAuth.get('/todos').then((res) => {
        setTodos(res.data);
      });
    }
  }, []);

  return (
    <Container>
      <div className="content-wrapper">
        <div className="logout-form" onClick={handleLogout}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="back-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
          Logout
        </div>
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

    > .logout-form {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      gap: 0.5rem;
      top: 1rem;
      left: 1rem;
      cursor: pointer;
      font-size: 0.8rem;
      color: #8e8e8e;
      font-weight: 600;
      &:hover {
        color: #262626;
      }
      > .back-icon {
        width: 1.5rem;
        height: 1.5rem;
        cursor: pointer;
      }
    }
  }
`;

export default Todo;
