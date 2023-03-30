import styled from 'styled-components';


type TypographyProps = {
    fontColor?: string;
    textAlign?: string;
}

export const Bold18x27 = styled.span<TypographyProps>`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  text-align: ${props => props.textAlign ? props.textAlign : 'center'};
  color: ${({fontColor, theme}) => fontColor || theme.palette.white};
`;


export const Bold24x36 = styled.span<TypographyProps>`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align: ${props => props.textAlign ? props.textAlign : 'center'};
  color: ${({fontColor, theme}) => fontColor || theme.palette.white};
`;


export const Medium14x21 = styled.span<TypographyProps>`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: ${(props) => props.textAlign};
  color: ${({fontColor, theme}) => fontColor || theme.palette.white};
`;

export const Bold14x21 = styled.span<TypographyProps>`
  font-style: normal;
  font-weight: 700;
= font-size: 14 px;
  line-height: 21px;
  text-align: ${(props) => props.textAlign};
  color: ${({fontColor, theme}) => fontColor || theme.palette.white};
`;


export const Medium18x27 = styled.span<TypographyProps>`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  text-align: ${(props) => props.textAlign};
  color: ${({fontColor, theme}) => fontColor || theme.palette.white};
`;

export const Medium16x24 = styled.span<TypographyProps>`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: ${(props) => props.textAlign};
  color: ${({fontColor, theme}) => fontColor || theme.palette.white};
`;

export const HighlightText = styled.span<TypographyProps>`
  color: ${(props) => props.fontColor};
`;

export const Bold16x24 = styled.span<TypographyProps>`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${({fontColor, theme}) => fontColor || theme.palette.white};
`;

export const Bold20x30 = styled.span<TypographyProps>`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: ${(props) => props.textAlign};
  color: ${({fontColor, theme}) => fontColor || theme.palette.white};
`;
