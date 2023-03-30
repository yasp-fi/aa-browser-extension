import React from 'react';
import {h} from 'preact';
import {useTheme} from 'styled-components';

import gasStationSvg from 'assets/icons/gas-station.svg';
import {Icon} from 'components/icon';
import {Row} from 'components/layout/flex';
import {Medium16x24} from 'components/typography';


type GasFeeRowProps = {
    gasFeeValue: string
    gasFeeTickerSymbol: string
}


export const GasFeeRow: React.FC<GasFeeRowProps> = ({gasFeeValue, gasFeeTickerSymbol}) => {
    const theme = useTheme();
    return (
        <Row alignItems={'center'} justifyContent={'space-between'}>
            <Medium16x24 fontColor={theme.palette.gray}>
                Gas fee
            </Medium16x24>
            <Row alignItems={'center'} gap={'4px'}>
                <Icon size={16} src={gasStationSvg} alt={'Gas station icon'}/>
                <Medium16x24>
                    {gasFeeValue} {gasFeeTickerSymbol}
                </Medium16x24>
            </Row>
        </Row>
    );
};
