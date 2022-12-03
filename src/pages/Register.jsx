import React from 'react';
import styled from 'styled-components';
import RegisterForm from '../components/RegisterForm';
const Register = () => {
  return (
    <Container>
      <RegisterForm />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Register;
