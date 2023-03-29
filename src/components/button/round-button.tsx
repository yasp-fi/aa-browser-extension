import React from 'react'
import { h } from 'preact';
import styled from 'styled-components';



type RoundButtonProps = {
    children: any;
    size?: string;
}

type StyledProps = Pick<RoundButtonProps, 'size'>


const defaultRoundSize = '54px';

const RoundButton = styled.button<StyledProps>`
    cursor: pointer;
    width: ${({size}) => size  ? size : defaultRoundSize}; 
    height: ${({size}) => size  ? size : defaultRoundSize};
    background-color: ${({theme}) => theme.palette.white};
    border-radius: ${({size}) => size ? size : defaultRoundSize}; 
  
    display: flex;
    justify-content: center;
    align-items: center;
`;


const Button: React.FC<RoundButtonProps> = ({ children, ...rest }) => {
    return (
        <RoundButton {...rest}>
            {children}
        </RoundButton>
    )
}

export default Button;
