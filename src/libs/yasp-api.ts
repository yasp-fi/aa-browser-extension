import { ENABLED_EVM_ASSETS_TICKERS } from "../constants/enabled-assets-temporary";
import {YASP_FI_API} from "../constants/urls";


export type PriceQuote = {
    id: string;
    value: string;
    symbol: string;
    providerSlug: string;
    expiry: number;
}

export async function getPriceQuotesBySymbols(): Promise<PriceQuote[]> {
    const neededSymbols = ENABLED_EVM_ASSETS_TICKERS.join(',').replace('ETH', 'WETH')

    const searchParams = new URLSearchParams({
        symbols: neededSymbols,
    })

    const requestURL = `${YASP_FI_API}/v1/price/get-price-quotes-by-symbols${searchParams.toString()}`

    const request = await fetch(requestURL, { method: 'GET' })
    const jsonResponse = await request.json()


    const { priceQuotesBySymbols = [] } = jsonResponse
    return priceQuotesBySymbols.map((quote: PriceQuote) => {
        if (quote.symbol === 'WETH') {
            return {
                ...quote,
                symbol: 'ETH',
            }
        }

        return quote
    })
}

