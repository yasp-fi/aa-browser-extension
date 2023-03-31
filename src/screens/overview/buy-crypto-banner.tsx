import React from "react";
import styled from "styled-components";
import {Column, Row} from "components/layout/flex";
import {Icon} from "components/icon";
import coinNice from 'assets/coin-nice.png'
import buyCryptoBg from 'assets/buy-crypto-bg.svg'
import {Bold16x24, Medium14x21} from "components/typography";


export const BuyCryptoBanner: React.FC = () => {
    return (
        <Layout gap={'8px'} height={'100px'} width={'100%'} onClick={() => window.open('https://changelly.com/buy-crypto', '_blank')} alignItems={'center'}>
            <Icon margin={'0 0 0 24px'} src={coinNice} size={64}  alt={'Coin picture'}/>

            <Column>
                <Bold16x24>
                    {'Buy crypto here!'}
                </Bold16x24>
                <Medium14x21>
                    Low fee, trusted partner.<br/>
                    Visa, Mastercard.
                </Medium14x21>
            </Column>
        </Layout>
    )
}


const Layout = styled(Row)`
    cursor: pointer;
    background-image: url(${buyCryptoBg});
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 16px;
`;
