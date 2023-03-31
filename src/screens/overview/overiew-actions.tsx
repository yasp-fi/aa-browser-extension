import React from 'react';
import { useNavigate } from "react-router-dom";
import styled, { useTheme } from 'styled-components';
import { Column, Row } from 'components/layout/flex';
import RoundButton from 'components/button/round-button';
import { Medium14x21 } from 'components/typography';
import { Icon } from 'components/icon';

import receiveSvg from 'assets/icons/add.svg';
import buySvg from 'assets/icons/credit-card.svg';
import swapSvg from 'assets/icons/trade.svg';
import sendSvg from 'assets/icons/send.svg';
import {TRANSAK_FIAT} from "../../constants/urls";

type ActionProps = {
  roundButtonIconSrc: string;
  roundButtonIconAlt: string;
  roundButtonBg: string;
  roundButtonHoverColor?: string;
  actionText: string;
  roundButtonIsOutlined?: boolean;

  onActionClick?: VoidFunction;
};

const Action: React.FC<ActionProps> = ({
  roundButtonIconSrc,
  roundButtonBg,
  roundButtonIsOutlined = false,
  roundButtonIconAlt,
  roundButtonHoverColor,
  actionText,
  onActionClick,
}) => {
  return (
    <Column alignItems={'center'} gap={'8px'}>
      <RoundButton hoverColor={roundButtonHoverColor} onClick={onActionClick} color={roundButtonBg} outlined={roundButtonIsOutlined}>
        <Icon onClick={onActionClick} src={roundButtonIconSrc} alt={roundButtonIconAlt} />
      </RoundButton>

      <Medium14x21>{actionText}</Medium14x21>
    </Column>
  );
};

export const OverviewActions: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <OverviewActionsLayout
      alignItems={'center'}
      justifyContent={'center'}
      gap={'24px'}
      height={'117px'}
      marginTop={'12px'}
      marginBottom={'12px'}
    >
      <Action
        roundButtonBg={theme.palette.blue}
        roundButtonHoverColor={'linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0085FF'}
        roundButtonIconSrc={receiveSvg}
        roundButtonIconAlt={'Receive Icon'}
        actionText={'Receive'}
        onActionClick={() => navigate('/receive')}
      />
      <Action
        roundButtonBg={'linear-gradient(90deg, #E4BF31 0%, #F87996 100%), #EF9011;'}
        roundButtonHoverColor={'linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), linear-gradient(90deg, #E4BF31 0%, #F87996 100%), #EF9011'}
        roundButtonIconSrc={buySvg}
        roundButtonIconAlt={'Buy Icon'}
        actionText={'Buy'}
        onActionClick={() => window.open(TRANSAK_FIAT, '_blank')}
      />
      <Action
        roundButtonBg={theme.palette.mediumDarkBlue}
        roundButtonHoverColor={'linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #2C3542'}
        roundButtonIconSrc={swapSvg}
        roundButtonIconAlt={'Swap Icon'}
        actionText={'Swap'}
        onActionClick={() => navigate('/receive')}
      />
      <Action
        roundButtonIconSrc={sendSvg}
        roundButtonIconAlt={'Send Icon'}
        roundButtonBg={theme.palette.mediumDarkBlue}
        roundButtonHoverColor={'linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #2C3542'}
        actionText={'Send'}
        onActionClick={() => navigate('/send')}
      />
    </OverviewActionsLayout>
  );
};

export const OverviewActionsLayout = styled(Row)`
  background-color: ${({ theme }) => theme.palette.secondaryBackground};
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
`;
