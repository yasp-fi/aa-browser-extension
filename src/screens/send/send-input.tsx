import React, {useCallback} from 'react';
import styled, {useTheme} from 'styled-components';
import {h} from 'preact';
import {CoinProperties} from '../../constants/enabled-assets-temporary';
import {Column, Row} from 'components/layout/flex';
import {Bold20x30, Medium14x21} from 'components/typography';
import {Icon} from 'components/icon';
import {getAssetLogoSrc} from '../../utils/get-asset-logo-src';
import {AnimatedArrowIcon} from 'components/animated-arrow';


type SendInputProps = {

    sendAmountValue: string;
    setSendAmountValue: (value: string) => void;

    sendCoinSelected: CoinProperties;


    selectCoinPanIsOpened: boolean
    toggleSelectCoinPan: VoidFunction;
}

export const SendInput: React.FC<SendInputProps> = ({
                                                        sendCoinSelected,
                                                        sendAmountValue,
                                                        selectCoinPanIsOpened,
                                                        toggleSelectCoinPan,
                                                        setSendAmountValue
                                                    }) => {
    const theme = useTheme();


    const onInputChange = useCallback((event: any) => {
        event.preventDefault();

        if (event.target.value) {
            setSendAmountValue(event.target.value);
        }
    }, []);

    return (
        <SendInputLayout gap={'8px'}>
            <Row alignItems={'center'} justifyContent={'space-between'}>
                <Medium14x21 fontColor={theme.palette.gray}>
                    FROM
                </Medium14x21>

                <Row alignItems={'center'} gap={'12px'}>
                    <ShortcutText>
                        25%
                    </ShortcutText>
                    <ShortcutText>
                        50%
                    </ShortcutText>
                    <ShortcutText>
                        75%
                    </ShortcutText>
                    <ShortcutText>
                        MAX
                    </ShortcutText>
                </Row>
            </Row>

            <Row alignItems={'center'} justifyContent={'space-between'}>
                <Row width={'auto'} gap={'8px'} alignItems={'center'}>
                    <Icon size={32} src={getAssetLogoSrc(sendCoinSelected.imageSlug)}
                          alt={`${sendCoinSelected.symbol} logo`}/>
                    <Bold20x30>
                        {sendCoinSelected.symbol}
                    </Bold20x30>
                    <AnimatedArrowIcon isActive={selectCoinPanIsOpened} onClick={toggleSelectCoinPan}/>
                </Row>

                <Input
                    value={sendAmountValue}
                    onChange={onInputChange}
                />
            </Row>
        </SendInputLayout>
    );
};

const SendInputLayout = styled(Column)`
  border-radius: 16px;
  background-color: ${({theme}) => theme.palette.secondaryBackground};
  padding: 16px;
`;

const ShortcutText = styled(Medium14x21)`
  cursor: pointer;
  color: ${({theme}) => theme.palette.gray};
`;


const Input = styled.input`
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: ${({theme}) => theme.palette.white};
  outline: none;
  text-align: right;
  font-family: inherit;
  background-color: transparent;
  max-width: 140px;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #7d7d7d;
    opacity: 1; /* Firefox */

    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
  }
`;
