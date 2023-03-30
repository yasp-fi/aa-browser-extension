export type CoinProperties = {
    description: string;
    symbol: string;
    name: string;
    decimals: number;
    imageSlug: string;
    onChainAddress?: string;
    discord?: string;
    website?: string;
    twitter?: string;
    telegram?: string;
    auditLink?: string
    riskAssessmentScore: string;
}


// For display purposes, we have hardcoded coins for now. In production environment this will be a dynamic list of coins that are enabled in the YaspFi's ecosystem.
export const ENABLED_EVM_ASSETS: CoinProperties[] = [
    {
        'description': 'ETH is the native currency of the Ethereum chain used for gas fees and security.',
        'symbol': 'ETH',
        'name': 'Ethereum',
        'decimals': 18,
        'imageSlug': 'ethereum',
        'discord': 'https://discord.com/invite/CetY6Y4',
        'website': 'https://ethereum.org',
        'twitter': 'https://twitter.com/ethdotorg',
        'riskAssessmentScore': 'A',
    },
    {
        'description': 'WBTC is backed 1:1 by BTC locked on the Ethereum chain. WBTC is a DeFi-compatible version of Bitcoin that is backed 1:1 by BTC custodied by BitGo.',
        'symbol': 'WBTC',
        'name': 'Wrapped BTC',
        'decimals': 8,
        'imageSlug': 'wrapped-bitcoin',
        'riskAssessmentScore': 'A-',
        'onChainAddress': '0x45AC379F019E48ca5dAC02E54F406F99F5088099',
    },
    {
        'description': 'EURS is the largest euro-backed digital asset, combining the benefits of the world\'s second most traded currency with the transparency, immutability, and efficiency of the blockchain.',
        'symbol': 'EURS',
        'name': 'STASIS EURS Token',
        'decimals': 2,
        'imageSlug': 'stasis-eurs-token',
        'riskAssessmentScore': 'B-',
        'website': 'https://stasis.net/',
        'telegram': 'https://t.me/STASIS',
        'twitter': 'https://twitter.com/stasisnet',
        'auditLink': 'https://www.certik.com/projects/stasis',
        'onChainAddress': '0xBC33cfbD55EA6e5B97C6da26F11160ae82216E2b',
    },
    {
        'description': 'USDC is a stablecoin that is pegged to the US dollar, allowing users to store, send, and receive digital dollars on the Ethereum blockchain.',
        'symbol': 'USDC',
        'name': 'USD Coin',
        'decimals': 6,
        'imageSlug': 'usd-coin',
        'riskAssessmentScore': 'B',
        'website': 'https://www.centre.io/usdc',
        'twitter': 'https://twitter.com/centre_io',
        'onChainAddress': '0x65aFADD39029741B3b8f0756952C74678c9cEC93',
    }
];
