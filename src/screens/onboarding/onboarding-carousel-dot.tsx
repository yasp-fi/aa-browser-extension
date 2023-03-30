import styled from 'styled-components';

export const CustomCarouselDot = styled.button<{active: boolean}>`
  background-color: ${(props) => (props.active ? '#FFFFFF' : '#2C3542')};
  border: none;
  border-radius: 66.6667px;
  cursor: pointer;
  height: 10px;
  margin: 0 12px;
  outline: none;
  padding: 0;
  width: ${(props) => (props.active ? '34.17px' : '10px')};
  transition: all 0.3s ease;
`;
