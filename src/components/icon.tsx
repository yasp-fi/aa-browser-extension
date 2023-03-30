import React from 'react';
import {h} from 'preact';
import styled, {css} from 'styled-components';

interface IconProps {
    src: string;
    alt: string;
    color?: string;
    size?: number;
    margin?: string;
    onClick?: VoidFunction;
}

const IconWrapper = styled.div<{ color?: string; size?: number; margin?: string; onClick?: VoidFunction; }>`
  cursor: ${({onClick}) => onClick ? 'pointer' : 'default'};
  display: inline-flex;
  ${(props) =>
          props.color &&
          css`
            filter: invert(1) drop-shadow(0 0 0 ${props.color});
          `};
  ${(props) =>
          props.size &&
          css`
            width: ${props.size}px;
            height: ${props.size}px;
          `};
  ${(props) =>
          props.margin &&
          css`
            margin: ${props.margin};
          `};
  transition: all 0.3s ease;
`;

const StyledIcon = styled.img`
  width: 100%;
  height: 100%;
`;

export const Icon: React.FC<IconProps> = ({src, alt, color, size, margin, onClick}) => {
    return (
        <IconWrapper color={color} size={size} margin={margin} onClick={onClick}>
            <StyledIcon src={src} alt={alt}/>
        </IconWrapper>
    );
};

