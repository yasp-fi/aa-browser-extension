import React from "react";
import {useTheme} from "styled-components";
import {ScreenLayout} from "components/layout/screen-layout";
import {Column, Row} from "components/layout/flex";
import {shortenAddress, UserHeader} from "components/user-header";
import BrickButton from "components/button/brick-button";
import {Bold16x24, Bold18x27, Bold24x36} from "components/typography";

import { ENABLED_EVM_ASSETS } from "../../constants/enabled-assets-temporary";
import {Icon} from "components/icon";
import {getYaspApiStaticSrc} from "../../utils/get-yasp-api-static-src";
import {ParameterRow} from "components/parameter-row";


type ConfirmTransactionProps = {
    userAddress: string;
    assetAddress: string;

    transactionAmount: string;
    transactionFee: string;

    appTitle?: string;
    appIcon?: string;
    toAddress?: string;
}

export const ConfirmTransactionScreen: React.FC<ConfirmTransactionProps> = ({ transactionFee, userAddress = '0xF7C2aEA111990e706C34444c32687243B90dAd9e', assetAddress, transactionAmount, toAddress, appIcon, appTitle }) => {
    const theme = useTheme();
    const asset = ENABLED_EVM_ASSETS.find(asset => asset.onChainAddress === assetAddress) || ENABLED_EVM_ASSETS[0];

    return (
        <ScreenLayout>
            <UserHeader userAddress={userAddress} />
            <Column height={'100%'} padding={'16px'} alignItems={'center'} justifyContent={'space-between'}>
                <Column gap={'12px'} alignItems={'center'} justifyContent={'center'}>
                    <Bold18x27>
                        Sign Transaction
                    </Bold18x27>

                    <Icon src={getYaspApiStaticSrc(asset.imageSlug)} alt={`${asset.name} logo`} />

                    <Bold24x36>
                        {transactionAmount} {asset.symbol}
                    </Bold24x36>
                </Column>

                <Column width={'100%'}>
                    <ParameterRow name={'From'} value={shortenAddress(userAddress)} />
                    <ParameterRow name={'To'} value={appTitle ? appTitle : shortenAddress(toAddress ?? '')} leftValueIcon={appIcon} />
                    <ParameterRow name={'Gas fee'} value={transactionFee} />
                </Column>


                <Row marginTop={'140px'} width={'100%'} alignItems={'center'} justifyContent={'space-between'}>
                    <BrickButton width={'150px'} height={56} borderColor={theme.palette.red} filled={false} >
                        <Bold16x24 fontColor={theme.palette.red}>
                            Deny
                        </Bold16x24>
                    </BrickButton>
                    <BrickButton width={'150px'} height={56} filled>
                        <Bold16x24 fontColor={theme.palette.white}>
                            Confirm
                        </Bold16x24>
                    </BrickButton>
                </Row>
            </Column>
        </ScreenLayout>
    )
}
