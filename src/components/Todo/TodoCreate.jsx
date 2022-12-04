import React, { useState } from 'react';
import styled from 'styled-components';
import { instance } from '../../api/api';

const TodoCreate = ({ setTodos }) => {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    if (value) {
      instance
        .post('/todos', {
          todo: value,
        })
        .then((res) => {
          setValue('');
          setTodos((prev) => [...prev, res.data]);
        });
    } else {
      alert('할 일을 입력해주세요.');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <Container>
      <h2>Todo</h2>
      <div className="todo-form">
        <input
          onChange={onChange}
          value={value}
          placeholder="할 일을 입력하세요"
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSubmit}>추가</button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 25rem;
  height: fit-content;
  padding-top: 1.5rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }
  > .todo-form {
    margin-top: 2rem;
    display: flex;
    flex-wrap: nowrap;

    > input {
      width: 16rem;
      height: 2.5rem;
      border: 1px solid #e6e6e6;
      border-top-left-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;
      padding: 0 0.5rem;
    }
    > button {
      width: 4rem;
      height: 2.65rem;
      border: 1px solid #e6e6e6;
      border-top-right-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
      background-color: #5865f2;
      color: white;
      font-weight: 600;
      cursor: pointer;
      transition-duration: 150ms;
      transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
      &:hover {
        background-color: #4752c4;
      }
    }
  }
`;

export default TodoCreate;
