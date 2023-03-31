import React from 'react';
import {Column, Row} from 'components/layout/flex';

import {CoinProperties} from '../../constants/enabled-assets-temporary';
import styled, {useTheme} from 'styled-components';
import {Icon} from '../icon';
import {getYaspApiStaticSrc} from '../../utils/get-yasp-api-static-src';
import {Bold16x24, Medium16x24} from 'components/typography';
import {NumericFormat} from 'react-number-format';


type CoinListItemProps = {
    coin: CoinProperties
    coinBalance: number;
    coinBalanceUSD: number;
    coinPriceChangePercentage: number;
    onClick?: VoidFunction
}

export const CoinListItem: React.FC<CoinListItemProps> = ({
                                                              coin,
                                                              coinBalance,
                                                              coinBalanceUSD,
                                                              coinPriceChangePercentage,
                                                              onClick
                                                          }) => {
    const isPositivePriceChange = coinPriceChangePercentage > 0;
    const theme = useTheme();

    return (
        <CoinListItemLayout onClick={onClick} height={'72px'} alignItems={'center'} gap={'12px'}>
            <Icon size={48} src={getYaspApiStaticSrc(coin.imageSlug)} alt={`${coin.name} logo`}/>
            <Column width={'calc(100% - 50px)'} gap={'2px'}>
                <Row alignItems={'center'} justifyContent={'space-between'}>
                    <Bold16x24>
                        {coin.name}
                    </Bold16x24>

                    <NumericFormat
                        prefix={`$`}
                        displayType={'text'}
                        value={coinBalanceUSD}
                        renderText={(value: string) => <Medium16x24>{value}</Medium16x24>}
                        thousandSeparator={`,`}
                        decimalSeparator={'.'}
                        decimalScale={2}
                    />
                </Row>
                <Row alignItems={'center'} justifyContent={'space-between'}>
                    <NumericFormat
                        displayType={'text'}
                        value={coinBalance}
                        renderText={(value: string) => <Medium16x24 fontColor={theme.palette.gray}>
                            {value} {coin.symbol}
                        </Medium16x24>}
                        decimalSeparator={'.'}
                        decimalScale={5}
                    />
                    <NumericFormat
                        displayType={'text'}
                        value={coinPriceChangePercentage}
                        renderText={(value: string) => <Medium16x24
                            fontColor={isPositivePriceChange ? theme.palette.green : theme.palette.red}>{isPositivePriceChange ? '+' : '-'}{value}%</Medium16x24>}
                        decimalSeparator={'.'}
                        decimalScale={1}
                    />
                </Row>
            </Column>
        </CoinListItemLayout>
    );
};


const CoinListItemLayout = styled(Row)`
  cursor: pointer;
  border-top: 1px solid ${({theme}) => theme.palette.secondaryBackground};
  border-bottom: 1px solid ${({theme}) => theme.palette.secondaryBackground};
  transition: all 0.3s ease;
  
  :hover {
    background: ${({theme}) => theme.palette.secondaryBackground};
  }
`;
