import React from 'react';
import styled from 'styled-components';

type RoundButtonProps = {
  children: any;
  onClick?: () => void;
  size?: string;
  color?: string;
  hoverColor?: string;
  outlined?: boolean;
};

type StyledProps = Pick<RoundButtonProps, 'size' | 'outlined' | 'color' | 'hoverColor'>;

const defaultRoundSize = '54px';

const RoundButton = styled.button<StyledProps>`
  cursor: pointer;
  width: ${({ size }) => (size ? size : defaultRoundSize)};
  height: ${({ size }) => (size ? size : defaultRoundSize)};
  background: ${({ outlined, color, theme }) =>
    outlined ? 'transparent' : color ? color : theme.palette.white};
  border-radius: ${({ size }) => (size ? size : defaultRoundSize)};

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  border: ${({ outlined, color, theme }) =>
    outlined ? `2px solid ${color ? color : theme.palette.white}` : 'none'};
  color: ${({ outlined, color, theme }) => (outlined && color ? color : theme.palette.mediumDarkBlue)};
  
  :hover {
    background: ${({ hoverColor }) => hoverColor ? hoverColor : undefined};
  }
`;

const Button: React.FC<RoundButtonProps> = ({ children, ...rest }) => {
  return <RoundButton {...rest}>{children}</RoundButton>;
};

export default Button;
