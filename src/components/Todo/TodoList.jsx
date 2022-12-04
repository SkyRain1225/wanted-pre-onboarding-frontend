import React, { useState } from 'react';
import styled from 'styled-components';
import Loading from '../Loading';

const TodoList = ({ todos, handleDelete, handleEdit }) => {
  const [edit, setEdit] = useState(undefined);
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState('');

  const handleEditMode = (id, isComplete) => {
    console.log('ddddd');

    if (edit === id) {
      return;
    }

    setValue(todos.find((todo) => todo.id === id).todo);
    setEdit(id);
    setChecked(isComplete);
  };

  const handleChecked = (id) => {
    console.log('sdsdsd');
    setChecked(!checked);
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.stopPropagation();
    handleEdit(edit, value, checked);
    setChecked(undefined);
    setEdit(undefined);
    setValue('');
  };

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
          <TodoItem
            key={todo.id}
            onClick={() => {
              handleEditMode(todo.id, todo.isCompleted);
            }}
          >
            {edit && edit === todo.id ? (
              <div className="edit-mode">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={handleChecked}
                />
                <input
                  type="text"
                  name="edit-input"
                  defaultValue={todo.todo}
                  onChange={onChange}
                />
                <div className="edit-btn">
                  <div className="btn_edit" onClick={handleSubmit}>
                    수정
                  </div>
                  <div
                    className="btn_cancel"
                    onClick={(e) => {
                      e.stopPropagation();
                      setEdit(undefined);
                    }}
                  >
                    취소
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="todo-text">
                  {todo.isCompleted ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="success-icon"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="doing-icon"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                </div>
                <div className="todo-text">{todo.todo}</div>
                <div className="todo-icons">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="edit-icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="delete-icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(todo.id);
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </div>
              </>
            )}
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

  > .edit-mode {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > input[type='checkbox'] {
      width: 1.5rem;
      height: 1.5rem;
      border: 1px solid #e6e6e6;
      border-radius: 0.25rem;
      margin-right: 0.5rem;
    }
    > input {
      width: 55%;
      border: none;
      border-radius: 0.5rem;
      outline: none;
      font-size: 0.8rem;
      color: #8e8e8e;
      font-weight: 600;
      padding: 0.5rem;
    }
    > .edit-btn {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.2rem;
      > .btn_edit {
        width: 2rem;
        height: 1.5rem;
        border: 1px solid #e6e6e6;
        border-radius: 0.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
        color: #888;
        cursor: pointer;
        transition-duration: 150ms;
        transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
        &:hover {
          background-color: #c1dad4;
          color: white;
        }
      }
      > .btn_cancel {
        width: 2rem;
        height: 1.5rem;
        border: 1px solid #e6e6e6;
        border-radius: 0.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
        color: #888;
        cursor: pointer;
        transition-duration: 150ms;
        transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
        &:hover {
          background-color: #ff8675;
          color: white;
        }
      }
    }
  }
  > .todo-text {
    max-width: 13rem;
    overflow-wrap: break-word;
    font-size: 0.8rem;
    color: #8e8e8e;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    > .success-icon {
      width: 1.5rem;
      height: 1.5rem;
      color: #3ec061;
    }
    > .doing-icon {
      width: 1.5rem;
      height: 1.5rem;
      color: #ff6950;
    }
  }
  > .todo-icons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    > .edit-icon {
      width: 1.5rem;
      height: 1.5rem;
      color: #8e8e8e;
      cursor: pointer;
      transition-duration: 150ms;
      transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
      &:hover {
        color: #262626;
      }
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
  }
  &:hover {
    background-color: #f5f5f5;
  }
`;
export default TodoList;
