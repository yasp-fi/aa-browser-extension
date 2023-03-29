import React, {useMemo} from 'react';
import { h } from 'preact';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Carousel } from 'react-responsive-carousel';
import { Column } from 'components/layout/flex';

import { CustomCarouselDot } from './onboarding-carousel-dot';

import investmentsImage from 'assets/onboarding-2.png';
import dataBasedDecisionImage from 'assets/onboarding-3.png';
import metaDexImage from 'assets/onboarding-4.png';
import multiChainImage from 'assets/onboarding-5.png';
import {ActionText, DescriptionTypography, TitleTypography} from 'components/typography';
import BrickButton from 'components/button/brick-button';

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
]


const carouselDescriptions: [string, string, string, string] = [
    'Put your coins into DeFi investments, automated smart-contracts do the rest.',
    // TODO: FIX THIS TEST
    'Risk Score is really good...',
    'Discover a new level of trading efficiency with our Meta DEX aggregator support.\n',
    'Unleash the full potential of your crypto portfolio with our multi-chain solution.',
]

export const OnboardingCarousel = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleSlideChange = (index: number) => {
        setSelectedIndex(index);
    };

    const header = useMemo(() => carouselHeaders[selectedIndex], [selectedIndex]);
    const description = useMemo(() => carouselDescriptions[selectedIndex], [selectedIndex]);


    return (
        <Column>
            <TitleTypography>
                {header}
            </TitleTypography>
            <DescriptionTypography textAlign={'center'}>
                {description}
            </DescriptionTypography>
            <Carousel
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                showIndicators
                infiniteLoop
                interval={5000}
                renderIndicator={renderCustomIndicator}
                onChange={handleSlideChange}
                dynamicHeight={true}
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
                <Column alignItems={'center'} justifyContent={'center'}>
                    <img
                        width={'100%'}
                        src={multiChainImage}
                        alt={'Get Started onboarding image about Meta DEX Aggreggator'}
                    />

                    <BrickButton width={'100%'} filled>
                        <ActionText>Get Started</ActionText>
                    </BrickButton>
                </Column>
            </Carousel>
        </Column>
    )
}
