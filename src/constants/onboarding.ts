import helloImage from 'assets/onboarding-1.svg';
import investmentsImage from 'assets/onboarding-2.svg';
import dataBasedDecisionImage from 'assets/onboarding-3.svg';
import metaDexImage from 'assets/onboarding-4.svg';
import multiChainImage from 'assets/onboarding-5.svg';


export type OnboardingItem = {
    header: string;
    description: string;
    image: string;
    isComingSoon: boolean;
}





export const ONBOARDING_ITEMS: OnboardingItem[] = [
    {
        header: `Hello, it's Yasp.Fi! 👋`,
        description: ``,
        isComingSoon: false,
        image: helloImage,
    },
    {
        header: 'DeFi Investments',
        description: 'Put your coins into DeFi investments, automated smart-contracts do the rest.',
        isComingSoon: false,
        image: investmentsImage,
    },
    {
        header: 'Data-based Decisions',
        description: 'At Yasp.Fi, your investment security is our top priority. The risk score ranges from A+ to C-, with A+ being the safest.',
        isComingSoon: false,
        image: dataBasedDecisionImage,
    },
    {
        header: 'Meta DEX Aggregator',
        description: 'Discover a new level of trading efficiency with our Meta DEX aggregator.',
        isComingSoon: true,
        image: metaDexImage,
    },
    {
        header: 'Future is multi-chain',
        description: 'Unleash the full potential of your crypto portfolio with our multi-chain solution.',
        isComingSoon: true,
        image: multiChainImage,
    }
];
