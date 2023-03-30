import React from 'react';
import styled from 'styled-components';
import {ScreenLayout} from 'components/layout/screen-layout';
import {Bold16x24, Bold18x27} from 'components/typography';
import {Column, Row} from 'components/layout/flex';

import settingsIcon from 'assets/icons/settings.svg';
import {Icon} from 'components/icon';
import {BalanceSphere} from './balance-sphere';
import {OverviewActions} from './overiew-actions';
import {OverviewSection} from './overview-section';
import {ENABLED_EVM_ASSETS} from '../../constants/enabled-assets-temporary';
import {CoinListItem} from 'components/coin/list-item';
import BrickButton from 'components/button/brick-button';
import {YASP_FI_INVESTMENTS_DASHBOARD_URL} from '../../constants/urls';

export const OverviewScreen: React.FC = () => {
    const openInvestments = () => {
        window.open(YASP_FI_INVESTMENTS_DASHBOARD_URL, '_blank');
    };


    return (
        <OverviewScreenLayout>
            <Column padding={'16px'} gap={'12px'}>
                <Row alignItems={'center'} justifyContent={'space-between'}>
                    <Bold18x27>
                        Overview
                    </Bold18x27>

                    <Icon src={settingsIcon} alt={'Settings Icon'} onClick={() => {
                        return;
                    }}/>
                </Row>

                <Row alignItems={'center'} justifyContent={'center'}>
                    <BalanceSphere balance={5432.123} colors={[
                        '#2AB0FD'
                    ]} pnlPercentage={10.6453}/>
                </Row>

                <OverviewActions/>

                <OverviewSection sectionText={'Portfolio'} leftSectionActionText={'See all'}
                                 leftSectionActionClick={() => {
                                     return;
                                 }}>
                    <Column>
                        {
                            ENABLED_EVM_ASSETS.map((coin) => (
                                <CoinListItem
                                    coin={coin}
                                    coinBalance={0}
                                    coinBalanceUSD={0}
                                    coinPriceChangePercentage={0}
                                />
                            ))
                        }
                    </Column>
                </OverviewSection>


                <BrickButton onClick={openInvestments} filled>
                    <Bold16x24>
                        Browse investments
                    </Bold16x24>
                </BrickButton>
            </Column>
        </OverviewScreenLayout>
    );
};


const OverviewScreenLayout = styled(ScreenLayout)`
  background-color: ${({theme}) => theme.palette.background};
`;
