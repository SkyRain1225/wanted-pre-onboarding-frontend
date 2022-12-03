import React from 'react';
import styled from 'styled-components';

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <Container>
      <div className="login-wrapper">
        <h2>Login</h2>
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
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="signup-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="svg-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
          />
        </svg>
        <div className="signup-text"> Sign up</div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 25rem;
  height: fit-content;
  padding-top: 3rem;
  padding-bottom: 2rem;
  background-color: white;
  border: 1px solid #e6e6e6;
  border-radius: 0.3rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > .login-wrapper .input-group {
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
  > .signup-wrapper {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    > .svg-icon {
      width: 1.5rem;
      height: 1.5rem;
      color: #7575a1;
      border-radius: 50%;
      padding: 0.3rem;
      border: 1px solid #e6e6e6;
      transition-duration: 150ms;
      transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
      &:hover {
        color: white;
        background-color: #4f4f6d;
      }
    }
    > .signup-text {
      margin-top: 0.2rem;
      font-size: 0.8rem;
      color: #7575a1;
    }
  }
`;

export default LoginForm;
