import React from 'react';
import { h } from 'preact';
import styled, { css } from 'styled-components';

type ButtonProps = {
    filled?: boolean;
    disabled?: boolean;
    width?: string | number;
    height?: string | number;
    children: any;
};

const BrickButton = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  gap: 8px;
  width: ${({ width }) => (width ? `${width}` : 'auto')};
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
  border: none;

  ${({ filled }) =>
    filled
        ? css`
          background: #0085ff;
          &:hover {
            background: #1991ff;
          }
        `
        : css`
          background: transparent;
          border: 1px solid #0085ff;
          &:hover {
            border: 1px solid #1991ff;
          }
        `}

  ${({ disabled , filled}) =>
    disabled &&
    css`
      opacity: ${(filled ? 0.5 : 1)};
      cursor: not-allowed;
      &:hover {
        background: ${(filled ? '#0085ff' : 'transparent')};
        border: ${() => {
          return (filled ? 'none' : '1px solid #0085ff');
        }};
      }
    `}
`;

const Button: React.FC<ButtonProps> = ({
                                           filled = false,
                                           disabled = false,
                                           width,
                                           height,
                                           children,
                                           ...props
                                       }) => {
    return (
        <BrickButton
            filled={filled}
            disabled={disabled}
            width={width}
            height={height}
            {...props}
        >
            {children}
        </BrickButton>
    );
};

export default Button;
