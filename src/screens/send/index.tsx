import React from 'react';
import styled from 'styled-components';

import { SendInput } from './send-input';
import { DestinationInput } from './destination-input';
import { GasFeeRow } from './gas-fee-row';

import { InnerPageTitle } from 'components/layout/inner-page-title';
import { ScreenLayout } from 'components/layout/screen-layout';
import { Column } from 'components/layout/flex';
import BrickButton from 'components/button/brick-button';
import { Bold16x24 } from 'components/typography';

import { CoinProperties, ENABLED_EVM_ASSETS } from '../../constants/enabled-assets-temporary';
import { useNavigate } from 'react-router';
import { useWeb3Auth } from '../../libs/hooks/use-web3-auth';
import { utils } from 'ethers';

export const SendScreen: React.FC = () => {
  const { safe } = useWeb3Auth();

  const [selectCoinPanIsOpened, setSelectCoinPanIsOpened] = React.useState<boolean>(false);
  const [sendCoinSelected, setSendCoinSelected] = React.useState<CoinProperties>(
    ENABLED_EVM_ASSETS[0]
  );
  const [sendAmountValue, setSendAmountValue] = React.useState<string>('0.00');
  const navigate = useNavigate();

  const [destinationAddressValue, setDestinationAddressValue] = React.useState<string>('');

  const transferETH = async () => {
    if (!safe) return;
    const value = utils.parseUnits(sendAmountValue, 'ether');
    const txObject = await safe.execTransactions([
      {
        data: '0x',
        to: destinationAddressValue,
        value: value.toString(),
      },
    ]);
  };

  return (
    <SendScreenLayout>
      <Column padding={'16px'} gap={'16px'}>
        <InnerPageTitle onBackClick={() => navigate('/overview')} title={'Send'} />
        <SendInput
          sendAmountValue={sendAmountValue}
          setSendAmountValue={setSendAmountValue}
          sendCoinSelected={sendCoinSelected}
          selectCoinPanIsOpened={selectCoinPanIsOpened}
          toggleSelectCoinPan={() => setSelectCoinPanIsOpened(!selectCoinPanIsOpened)}
        />
        <DestinationInput
          destinationAddressValue={destinationAddressValue}
          setDestinationAddressValue={setDestinationAddressValue}
        />
        <GasFeeRow gasFeeValue={'0.001'} gasFeeTickerSymbol={'ETH'} />

        <BrickButton
          onClick={() => transferETH()}
          disabled={parseFloat(sendAmountValue) <= 0 || !destinationAddressValue}
          filled
        >
          <Bold16x24>Send {sendAmountValue} ETH</Bold16x24>
        </BrickButton>
      </Column>
    </SendScreenLayout>
  );
};

const SendScreenLayout = styled(ScreenLayout)`
  background-color: ${({ theme }) => theme.palette.background};
`;
