import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <div className="register-wrapper">
        <div className="back-form" onClick={() => navigate(-1)}>
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
          뒤로 가기
        </div>

        <h2>Sign Up</h2>
        <form className="input-group" onClick={handleSubmit}>
          <input
            type="email"
            name="email"
            className="email"
            placeholder="Email"
            autoComplete="off"
          />

          <input
            type="password"
            name="password"
            className="password"
            placeholder="Password"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 25rem;
  height: fit-content;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: white;
  border: 1px solid #e6e6e6;
  border-radius: 0.3rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > .register-wrapper .back-form {
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

  > .register-wrapper .input-group {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    > input {
      width: 18rem;
      height: 2.5rem;
      border: 1px solid #e6e6e6;
      border-radius: 0.5rem;
      margin-bottom: 0.5rem;
      padding: 0 0.5rem;
    }
    > button {
      width: 100%;
      height: 2.5rem;
      border: 1px solid #e6e6e6;
      border-radius: 0.5rem;
      margin-bottom: 0.5rem;
      padding: 0 0.5rem;
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

export default RegisterForm;
