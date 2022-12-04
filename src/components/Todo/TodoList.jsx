import React from 'react';
import styled from 'styled-components';
import Loading from '../Loading';

const TodoList = ({ todos, handleDelete }) => {
  if (!todos) {
    return (
      <Container>
        <div className="loding-form">
          <Loading />
        </div>
      </Container>
    );
  }
  if (todos && !todos.length) {
    return (
      <Container>
        <div className="todos-message">아직 설정된 할일이 없어요!</div>
      </Container>
    );
  }
  return (
    <Container>
      {todos.map((todo) => {
        return (
          <TodoItem key={todo.id} onClick={() => console.log(todo.id)}>
            <div className="todo-text">
              {todo.isCompleted ? '완료' : '실패'}
            </div>
            <div className="todo-text">{todo.todo}</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="delete-icon"
              onClick={() => handleDelete(todo.id)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </TodoItem>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 25rem;
  height: 23rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  overflow-y: scroll;
  > .loding-form {
    margin-top: 9rem;
  }
  > .todos-message {
    margin-top: 9rem;
    font-size: 1.5rem;
    color: #888;
  }
`;

const TodoItem = styled.div`
  width: 18rem;

  border: 1px solid #e6e6e6;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  > .todo-text {
    max-width: 13rem;
    font-size: 0.8rem;
    overflow-wrap: break-word;
    color: #8e8e8e;
    font-weight: 600;
  }
  > .delete-icon {
    width: 1.5rem;
    height: 1.5rem;
    color: #8e8e8e;
    cursor: pointer;
    transition-duration: 150ms;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    &:hover {
      color: #ff6950;
    }
  }
  &:hover {
    background-color: #f5f5f5;
  }
`;
export default TodoList;
