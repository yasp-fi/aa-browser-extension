import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { ScreenLayout } from 'components/layout/screen-layout';
import { Bold16x24, Bold18x27 } from 'components/typography';
import { Column, Row } from 'components/layout/flex';

import settingsIcon from 'assets/icons/settings.svg';
import { Icon } from 'components/icon';
import { BalanceSphere } from './balance-sphere';
import { OverviewActions } from './overiew-actions';
import { OverviewSection } from './overview-section';
import { ENABLED_EVM_ASSETS } from '../../constants/enabled-assets-temporary';
import { CoinListItem } from 'components/coin/list-item';
import BrickButton from 'components/button/brick-button';
import { YASP_FI_INVESTMENTS_DASHBOARD_URL } from '../../constants/urls';
import { useWeb3Auth } from '../../libs/hooks/use-web3-auth';
import { getSafeUSDBalance, TokenBalance } from '../../libs/safe-service';
import {BuyCryptoBanner} from "./buy-crypto-banner";
import {UserHeader} from "components/user-header";

export const OverviewScreen: React.FC = () => {
  const openInvestments = () => {
    window.open(YASP_FI_INVESTMENTS_DASHBOARD_URL, '_blank');
  };

  const { safe, wallet } = useWeb3Auth();
  const [tokens, setTokens] = useState<TokenBalance[]>([]);

  const totalUsdBalance = useMemo(() => {
    return +tokens.reduce((a, b) => a + parseFloat(b.amountUSD), 0).toFixed(2);
  }, [tokens]);

  useEffect(() => {
    if (!safe || !wallet) return;
    getSafeUSDBalance(safe, wallet).then(response => {
      console.info(response)
      setTokens(response);
    });
  }, [safe, wallet]);

  return (
    <OverviewScreenLayout>
      <UserHeader userAddress={safe?.address || ''} />
      <Column padding={'16px'} gap={'12px'}>

        <Row alignItems={'center'} justifyContent={'center'}>
          <BalanceSphere balance={totalUsdBalance} colors={['#2AB0FD']} pnlPercentage={10.6453} />
        </Row>

        <OverviewSection sectionText={'Recent'} leftSectionActionText={'History'} leftSectionActionClick={() => {}}>
          <BuyCryptoBanner />
        </OverviewSection>

        <OverviewActions />

        <OverviewSection
          sectionText={'Portfolio'}
          leftSectionActionText={'See all'}
          leftSectionActionClick={() => {
            return;
          }}
        >
          <Column>
            {ENABLED_EVM_ASSETS.map(coin => (
              <CoinListItem
                coin={coin}
                coinBalance={0}
                coinBalanceUSD={0}
                coinPriceChangePercentage={0}
              />
            ))}
          </Column>
        </OverviewSection>

        <BrickButton onClick={openInvestments} filled>
          <Bold16x24>Browse investments</Bold16x24>
        </BrickButton>
      </Column>
    </OverviewScreenLayout>
  );
};

const OverviewScreenLayout = styled(ScreenLayout)`
  background-color: ${({ theme }) => theme.palette.background};
`;
