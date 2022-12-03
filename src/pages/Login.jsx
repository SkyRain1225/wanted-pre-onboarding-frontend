import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: white; */
`;

export default Login;
