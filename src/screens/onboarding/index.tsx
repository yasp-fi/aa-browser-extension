import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import React, { useCallback } from 'react';
import { ONBOARDING_ITEMS, OnboardingItem } from '../../constants/onboarding';
import { ScreenLayout } from 'components/layout/screen-layout';
import styled, { useTheme } from 'styled-components';
import { Column, Row } from 'components/layout/flex';

import backgroundGridImage from 'assets/screen-squares-bg.png';
import { Bold16x24, Bold18x27, HighlightText, Medium18x27 } from 'components/typography';
import { ComingSoonBadge } from 'components/coming-soon-badge';
import BrickButton from 'components/button/brick-button';
import { useNavigate } from 'react-router-dom';
import { AuthStatus, useWeb3Auth } from '../../libs/hooks/use-web3-auth';

export const OnboardingScreen: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const { logout, status } = useWeb3Auth();
  const navigate = useNavigate();

  if (status === AuthStatus.Connected) {
    navigate('/overview');
  } else {
    if (localStorage.getItem('isOnboardingCompleted') === '1') {
      navigate('/start');
    }
  }

  const renderIndicators = () => {
    return (
      <Row alignItems={'center'} justifyContent={'center'} marginBottom={'12px'}>
        {ONBOARDING_ITEMS.map((item, index) => (
          <CustomCarouselDot
            key={index}
            onClick={() => setSelectedIndex(index)}
            active={selectedIndex === index}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </Row>
    );
  };

  return (
    <>
      <OnboardingLayout>
        <Column padding={'16px'}>
          <Bold18x27 textAlign={'center'}>{ONBOARDING_ITEMS[selectedIndex].header}</Bold18x27>
        </Column>
        {renderIndicators()}
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          interval={5000}
          onChange={(index: number) => setSelectedIndex(index)}
          dynamicHeight={false}
          autoPlay={false}
          stopOnHover
          swipeable
          emulateTouch
        >
          {ONBOARDING_ITEMS.map((item, index) => (
            <OnboardingCarouselItem
              key={item.header}
              item={item}
              isFinalStep={index === ONBOARDING_ITEMS.length - 1}
              isFirstStep={index === 0}
            />
          ))}
        </Carousel>
      </OnboardingLayout>
    </>
  );
};

const OnboardingCarouselItem: React.FC<{
  item: OnboardingItem;
  isFinalStep: boolean;
  isFirstStep: boolean;
}> = ({ item, isFinalStep, isFirstStep }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const onGetStartedClick = useCallback(() => {
    navigate('/start');
    
    localStorage.setItem('isOnboardingCompleted', '1');
  }, [navigate]);

  return (
    <Column alignItems={'center'} justifyContent={'center'}>
      <Medium18x27 style={{ paddingLeft: 16, paddingRight: 16 }}>
        {!isFirstStep ? (
          item.description
        ) : (
          <React.Fragment>
            <HighlightText fontColor={theme.palette.pink}>DeFi 2.0 Wallet</HighlightText>
            {' that helps you'}
            <HighlightText fontColor={theme.palette.blue}>{' earn more '}</HighlightText>
            {' by '}
            <HighlightText fontColor={theme.palette.yellow}>doing less.</HighlightText>
          </React.Fragment>
        )}
      </Medium18x27>
      {item.isComingSoon ? <ComingSoonBadge marginTop={'12px'} /> : null}
      <img src={item.image} alt={`${item.header} image`} />
      {isFinalStep ? (
        <GetStartedButtonLayout
          onClick={onGetStartedClick}
          width={'calc(100% - 32px)'}
          height={'56px'}
          filled
        >
          <Bold16x24>Get Started</Bold16x24>
        </GetStartedButtonLayout>
      ) : null}
    </Column>
  );
};

export const CustomCarouselDot = styled.button<{ active: boolean }>`
  background-color: ${props => (props.active ? '#FFFFFF' : '#2C3542')};
  border: none;
  border-radius: 66.6667px;
  cursor: pointer;
  height: 10px;
  margin: 0 12px;
  outline: none;
  padding: 0;
  width: ${props => (props.active ? '34.17px' : '10px')};
  transition: all 0.3s ease;
`;

const OnboardingLayout = styled(ScreenLayout)`
  background-image: url(${backgroundGridImage});
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
`;

const GetStartedButtonLayout = styled(BrickButton)`
  margin-top: 20px;
`;
