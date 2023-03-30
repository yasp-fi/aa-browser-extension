import React from 'react';
import styled, {useTheme} from 'styled-components';
import {Column} from 'components/layout/flex';
import {Bold24x36, Medium16x24} from 'components/typography';
import {NumericFormat} from 'react-number-format';

type BalanceSphereProps = {
    balance: number;
    colors: string[];
    pnlPercentage: number;
}

const SphereLayout = styled.div`
  width: 256px;
  height: 256px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SphereEdgeGlow = styled.div<{ edgeColor: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(76.13% 58.04% at 50% 50%,
  rgba(23, 29, 37, 0) 67.2%,
  ${({edgeColor}) => edgeColor} 79.25%);
  animation: rotation 10s infinite linear;
  transition: background 0.3s ease;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const BalanceSphere: React.FC<BalanceSphereProps> = ({balance, colors, pnlPercentage}) => {
    const theme = useTheme();
    const edgeColor = balance === 0 ? '#505A68' : colors[0];
    const isPositivePNLGrowth = pnlPercentage > 0;

    return (
        <SphereLayout>
            <SphereEdgeGlow edgeColor={edgeColor}/>

            <Column alignItems={'center'}>
                <NumericFormat
                    prefix={`$`}
                    displayType={'text'}
                    value={balance}
                    renderText={(value: string) => <Bold24x36>{value}</Bold24x36>}
                    thousandSeparator={`,`}
                    decimalSeparator={'.'}
                    decimalScale={2}
                />

                <NumericFormat
                    displayType={'text'}
                    value={pnlPercentage}
                    renderText={(value: string) => <Medium16x24
                        fontColor={isPositivePNLGrowth ? theme.palette.green : theme.palette.red}>{isPositivePNLGrowth ? '+' : '-'}{value}%</Medium16x24>}
                    decimalSeparator={'.'}
                    decimalScale={1}
                />
            </Column>
        </SphereLayout>
    );
};
