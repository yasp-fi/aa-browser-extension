import React from 'react';
import { h } from 'preact';
import styled from 'styled-components';
import { useTheme } from 'styled-components';

import {ScreenLayout} from 'components/layout/screen-layout';
import {DescriptionTypography, TitleTypography, HighlightedText, ActionText} from 'components/typography';
import {Column} from 'components/layout/flex';


import bg from 'assets/screen-squares-bg.png';
import firstStepImg from 'assets/onboarding-1.png';
import BrickButton from 'components/button/brick-button';
import {OnboardingCarousel} from './onboarding-carousel';


type StepProps = {
    onNext: VoidFunction
}

const GetStartedStep: React.FC<StepProps> = ({ onNext }) => {
    const theme = useTheme()

    return (
        <OnboardingLayout>
            <Column padding={'20px'} alignItems={'center'} gap={'6.5px'}>
                <TitleTypography fontColor={theme.palette.white}>
                    Hello, it's YaspFi 👋
                </TitleTypography>

                <DescriptionTypography fontColor={theme.palette.white} textAlign={'center'}>
                    <HighlightedText fontColor={theme.palette.pink}>DeFi 2.0 Wallet</HighlightedText> that helps you <HighlightedText fontColor={theme.palette.blue}>earn more</HighlightedText> by <HighlightedText fontColor={theme.palette.yellow}>doing less.</HighlightedText>
                </DescriptionTypography>
                <img
                    width={375}
                    src={firstStepImg}
                    alt={'Get Started onboarding image'}
                />

                <OnboardingStartButton onClick={onNext} width={'100%'} height={56} filled>
                    <ActionText color={theme.palette.white}>
                        Get Started
                    </ActionText>
                </OnboardingStartButton>
            </Column>
        </OnboardingLayout>
    )
}



const CarouselStep: React.FC<StepProps> = () => {
    return (
        <OnboardingLayout>
            <Column padding={'20px'}>
                <OnboardingCarousel />
            </Column>
        </OnboardingLayout>
    )
}


export const OnboardingScreen: React.FC = () => {
    const [step, setStep] = React.useState(0);

    return (
        <React.Fragment>
            {step === 0 ? <GetStartedStep onNext={() => setStep(1)} /> : null}
            {step === 1 ? <CarouselStep onNext={() => setStep(0)} /> : null}
        </React.Fragment>
    )
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
