import React from 'react';
import styled from 'styled-components';

const Loading = () => {
  return (
    <Container>
      <div className="loader" />
    </Container>
  );
};

const Container = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  > .loader {
    width: 3rem;
    height: 3rem;
    border: 0.3rem solid #a6a6a6;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
