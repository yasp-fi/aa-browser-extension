import styled from 'styled-components';


type TypographyProps = {
    fontColor?: string;
    textAlign?: string;
}

export const TitleTypography = styled.span<TypographyProps>`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: ${({ fontColor, theme }) => fontColor || theme.palette.white};
`;


export const Span14x21 = styled.span<TypographyProps>`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: ${(props) => props.textAlign};
  color: ${({ fontColor, theme }) => fontColor || theme.palette.white};
`;

export const DescriptionTypography = styled.span<TypographyProps>`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  text-align: ${(props) => props.textAlign};
  color: ${({ fontColor, theme }) => fontColor || theme.palette.white};
`;

export const HighlightedText = styled.span<TypographyProps>`
  color: ${(props) => props.fontColor};
`;

export const ActionText = styled.span<TypographyProps>`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${({ fontColor, theme }) => fontColor || theme.palette.white};
`;
