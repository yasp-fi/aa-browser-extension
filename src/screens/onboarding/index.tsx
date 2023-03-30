import React from 'react';
import styled, { useTheme } from 'styled-components';

import { ScreenLayout } from 'components/layout/screen-layout';
import { Bold16x24, Bold18x27, HighlightText, Medium18x27 } from 'components/typography';
import { Column } from 'components/layout/flex';

import bg from 'assets/screen-squares-bg.png';
import firstStepImg from 'assets/onboarding-1.png';
import BrickButton from 'components/button/brick-button';
import { OnboardingCarousel } from './onboarding-carousel';
import { redirect } from 'react-router';

type StepProps = {
  onNext: VoidFunction;
};

const GetStartedStep: React.FC<StepProps> = ({ onNext }) => {
  const theme = useTheme();

  return (
    <OnboardingLayout>
      <Column padding={'20px'} alignItems={'center'} gap={'6.5px'}>
        <Bold18x27 fontColor={theme.palette.white}>Hello, it's YaspFi 👋</Bold18x27>

        <Medium18x27 fontColor={theme.palette.white} textAlign={'center'}>
          <HighlightText fontColor={theme.palette.pink}>DeFi 2.0 Wallet</HighlightText> that helps
          you <HighlightText fontColor={theme.palette.blue}>earn more</HighlightText> by{' '}
          <HighlightText fontColor={theme.palette.yellow}>doing less.</HighlightText>
        </Medium18x27>
        <img width={375} src={firstStepImg} alt={'Get Started onboarding image'} />

        <OnboardingStartButton onClick={onNext} width={'100%'} height={56} filled>
          <Bold16x24 color={theme.palette.white}>Get Started</Bold16x24>
        </OnboardingStartButton>
      </Column>
    </OnboardingLayout>
  );
};

const OnboardingCarouselStep: React.FC<StepProps> = () => {
  return (
    <OnboardingLayout>
      <Column padding={'16px'}>
        <OnboardingCarousel onGetStartedClick={() => redirect('/start')} />
      </Column>
    </OnboardingLayout>
  );
};

export const OnboardingScreen: React.FC = () => {
  const [step, setStep] = React.useState(0);

  return (
    <React.Fragment>
      {step === 0 ? <GetStartedStep onNext={() => setStep(1)} /> : null}
      {step === 1 ? <OnboardingCarouselStep onNext={() => setStep(0)} /> : null}
    </React.Fragment>
  );
};

const OnboardingLayout = styled(ScreenLayout)`
  background-color: ${props => props.theme.palette.background};
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 5px;
`;

const OnboardingStartButton = styled(BrickButton)`
  margin-top: 20px;
`;
