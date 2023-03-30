import { useEffect } from "react";
import { create } from "zustand";

import { getPriceQuotesBySymbols } from "../libs/yasp-api";
import { PriceQuote } from "../libs/yasp-api";



type PriceQuotesBySymbol = Record<string, PriceQuote>;

type PriceQuotesStore = {
    isLoadingPrices: boolean
    priceQuotes: PriceQuotesBySymbol;
}

export const usePriceQuotesStore = create<PriceQuotesStore>((set) => ({
    isLoadingPrices: false,
    priceQuotes: {},
}));


export const usePriceQuotesTrigger = () => {
    useEffect(() => {
        usePriceQuotesStore.setState({
            isLoadingPrices: true,
        })
        getPriceQuotesBySymbols()
            .then(priceQuotesArray => {
                const defaultQuotes: PriceQuotesBySymbol = {}

                const priceQuotes = priceQuotesArray.reduce((acc, quote) => {
                    acc[quote.symbol] = quote
                    return acc
                }, defaultQuotes)

                usePriceQuotesStore.setState({ priceQuotes })
            })
            .finally(() => {
                usePriceQuotesStore.setState({ isLoadingPrices: false })
            })

    }, [])
}
