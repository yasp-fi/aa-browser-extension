import React from 'react';
import styled, {useTheme} from 'styled-components';
import {h} from 'preact';
import {route} from 'preact-router';
import {Column, Row} from 'components/layout/flex';
import RoundButton from 'components/button/round-button';
import {Medium14x21} from 'components/typography';
import {Icon} from 'components/icon';

import receiveSvg from 'assets/icons/add.svg';
import buySvg from 'assets/icons/credit-card.svg';
import swapSvg from 'assets/icons/trade.svg';
import sendSvg from 'assets/icons/send.svg';


type ActionProps = {
    roundButtonIconSrc: string;
    roundButtonIconAlt: string;
    roundButtonBg: string;
    actionText: string;
    roundButtonIsOutlined?: boolean;

    onActionClick?: VoidFunction;
}

const Action: React.FC<ActionProps> = ({
                                           roundButtonIconSrc,
                                           roundButtonBg,
                                           roundButtonIsOutlined = false,
                                           roundButtonIconAlt,
                                           actionText,
                                           onActionClick
                                       }) => {
    return (
        <Column alignItems={'center'} gap={'8px'}>
            <RoundButton onClick={onActionClick} color={roundButtonBg} outlined={roundButtonIsOutlined}>
                <Icon onClick={onActionClick} src={roundButtonIconSrc} alt={roundButtonIconAlt}/>
            </RoundButton>

            <Medium14x21>
                {actionText}
            </Medium14x21>
        </Column>
    );
};


export const OverviewActions: React.FC = () => {
    const theme = useTheme();

    return (
        <OverviewActionsLayout alignItems={'center'} justifyContent={'center'} gap={'24px'} height={'117px'}
                               marginTop={'12px'}>
            <Action
                roundButtonBg={theme.palette.blue}
                roundButtonIconSrc={receiveSvg}
                roundButtonIconAlt={'Receive Icon'}
                actionText={'Receive'}
                onActionClick={() => route('/coin-list')}
            />
            <Action
                roundButtonIconSrc={buySvg}
                roundButtonIconAlt={'Buy Icon'}
                roundButtonBg={'linear-gradient(90deg, #E4BF31 0%, #F87996 100%), #EF9011;'}
                actionText={'Buy'}
                onActionClick={() => route('/receive')}
            />
            <Action
                roundButtonIconSrc={swapSvg}
                roundButtonIconAlt={'Swap Icon'}
                roundButtonBg={theme.palette.mediumDarkBlue}
                actionText={'Swap'}
                onActionClick={() => route('/receive')}
            />
            <Action
                roundButtonIconSrc={sendSvg}
                roundButtonIconAlt={'Send Icon'}
                roundButtonBg={theme.palette.mediumDarkBlue}
                actionText={'Send'}
                onActionClick={() => route('/send')}
            />
        </OverviewActionsLayout>
    );
};


export const OverviewActionsLayout = styled(Row)`
  background-color: ${({theme}) => theme.palette.secondaryBackground};
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
`;
