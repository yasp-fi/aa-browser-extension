import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const LoaderInner = styled.div`
  border: 5px solid rgba(255, 255, 255, 0.1); 
  border-top: 5px solid #fff; 
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${rotate} 1s linear infinite;
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderInner />
    </LoaderContainer>
  );
}

export default Loader;