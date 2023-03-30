import React from 'react';
import styled, { css, keyframes } from 'styled-components';

type BottomPanProps = {
  isOpen: boolean;
  onClose: () => void;
  children: any;
};

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0%);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(100%);
  }
`;

const PanContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 75%;
  background-color: ${({ theme }) => theme.palette.secondaryBackground};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 16px;
  z-index: 1000;
  overflow: hidden;

  ${({ isOpen }) =>
    isOpen
      ? css`
          animation: ${slideUp} 0.3s ease forwards;
        `
      : css`
          animation: ${slideDown} 0.3s ease forwards;
        `}
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

export const BottomPan: React.FC<BottomPanProps> = ({ isOpen, onClose, children }) => {
  return (
    <React.Fragment>
      <Overlay isOpen={isOpen} onClick={onClose} />
      <PanContainer isOpen={isOpen}>{children}</PanContainer>
    </React.Fragment>
  );
};
