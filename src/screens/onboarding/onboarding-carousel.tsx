import React, {useMemo} from 'react';
import {h} from 'preact';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import {Carousel} from 'react-responsive-carousel';
import {Column} from 'components/layout/flex';

import {CustomCarouselDot} from './onboarding-carousel-dot';

import investmentsImage from 'assets/onboarding-2.png';
import dataBasedDecisionImage from 'assets/onboarding-3.png';
import metaDexImage from 'assets/onboarding-4.png';
import multiChainImage from 'assets/onboarding-5.png';

import {Bold16x24, Bold18x27, Medium18x27} from 'components/typography';
import BrickButton from 'components/button/brick-button';
import styled from 'styled-components';

const renderCustomIndicator = (
    clickHandler: (e: unknown) => void,
    isSelected: boolean,
    index: number,
    label: string
) => {
    return (
        <CustomCarouselDot
            key={index}
            onClick={clickHandler}
            active={isSelected}
            aria-label={label}
        />
    );
};

const carouselHeaders: [string, string, string, string] = [
    'DeFi Investments',
    'Data-based Decisions',
    'Meta DEX',
    'Diversified by Chains',
];


const carouselDescriptions: [string, string, string, string] = [
    'Put your coins into DeFi investments, automated smart-contracts do the rest.',
    'At Yasp.Fi, your investment security is our top priority. The risk score ranges from A+ to C-, with A+ being the safest.',
    'Discover a new level of trading efficiency with our Meta DEX aggregator support.\n',
    'Unleash the full potential of your crypto portfolio with our multi-chain solution.',
];


type OnboardingCarouselProps = {
    onGetStartedClick: () => void;
}

export const OnboardingCarousel: React.FC<OnboardingCarouselProps> = ({onGetStartedClick}) => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleSlideChange = (index: number) => {
        setSelectedIndex(index);
    };

    const header = useMemo(() => carouselHeaders[selectedIndex], [selectedIndex]);
    const description = useMemo(() => carouselDescriptions[selectedIndex], [selectedIndex]);


    return (
        <Column>
            <Bold18x27>
                {header}
            </Bold18x27>
            <Medium18x27 textAlign={'center'}>
                {description}
            </Medium18x27>
            <Carousel
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                showIndicators
                interval={5000}
                renderIndicator={renderCustomIndicator}
                onChange={handleSlideChange}
                dynamicHeight={false}
                autoPlay={false}
                stopOnHover
                swipeable
                emulateTouch
            >
                <Column alignItems={'center'} justifyContent={'center'}>
                    <img
                        width={'100%'}
                        src={investmentsImage}
                        alt={'Get Started onboarding image about DeFi Investments'}
                    />
                </Column>
                <Column alignItems={'center'} justifyContent={'center'}>
                    <img
                        width={375}
                        src={dataBasedDecisionImage}
                        alt={'Get Started onboarding image about Risk Analytics'}
                    />
                </Column>
                <Column alignItems={'center'} justifyContent={'center'}>
                    <img
                        width={375}
                        src={metaDexImage}
                        alt={'Get Started onboarding image about Meta DEX Aggreggator'}
                    />
                </Column>
                <Column alignItems={'center'}>
                    <GetStartedButtonLayout onClick={onGetStartedClick} width={'100%'} height={'56px'} filled>
                        <Bold16x24>Get Started</Bold16x24>
                    </GetStartedButtonLayout>
                    <img
                        width={'100%'}
                        src={multiChainImage}
                        alt={'Get Started onboarding image about Meta DEX Aggreggator'}
                    />

                </Column>
            </Carousel>
        </Column>
    );
};


const GetStartedButtonLayout = styled(BrickButton)`
  margin-top: 20px;
`;
