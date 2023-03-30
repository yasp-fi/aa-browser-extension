import React from 'react';
import styled, { css } from 'styled-components';

type ButtonProps = {
    filled?: boolean;
    disabled?: boolean;
    width?: string | number;
    height?: string | number;

    onClick?: VoidFunction;
    justifyContent?: string;
    alignItems?: string;
    padding?: string;
    flexDirection?: string;


    backgroundColor?: string;
    borderColor?: string;


    margin?: string;

    children: any;
};

const BrickButton = styled.button<ButtonProps>`
  display: flex;
  flex-direction: ${({flexDirection}) => (flexDirection ? flexDirection : 'row')};
  justify-content: ${({justifyContent}) => (justifyContent ? justifyContent : 'center')};
  align-items: ${({alignItems}) => (alignItems ? alignItems : 'center')};
  padding: ${({padding}) => (padding ? `${padding}` : '16px 24px')};
  gap: 8px;
  width: ${({width}) => (width ? `${width}` : 'auto')};
  height: ${({height}) => (height ? `${height}` : 'auto')};
  border-radius: 12px;
  margin: ${({margin}) => (margin ? `${margin}` : '0')};
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
  border: none;

  ${({filled, backgroundColor, borderColor}) =>
          filled
                  ? css`
                    background: ${backgroundColor || '#0085ff'};

                    &:hover {
                      background: ${backgroundColor ? `${backgroundColor}CC` : '#1991ff'};
                    }
                  `
                  : css`
                    background: transparent;
                    border: 1px solid ${borderColor || '#0085ff'};

                    &:hover {
                      border: 1px solid ${borderColor ? `${borderColor}CC` : '#1991ff'};
                    }
                  `}

  ${({disabled, filled}) =>
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
