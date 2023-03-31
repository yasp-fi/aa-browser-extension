import React from 'react'
import styled from 'styled-components'
import {Row} from "components/layout/flex";
import {Icon} from "components/icon";
import {getYaspApiStaticSrc} from "../utils/get-yasp-api-static-src";
import {Bold16x24} from "components/typography";
import settingsIcon from "assets/icons/settings.svg";
import copyIcon from "assets/icons/copy.svg";



type UserHeaderProps = {
    userAddress: string;
}

export const shortenAddress = (address: string) => {
    return address.slice(0, 6) + '...' + address.slice(-4);
}

export const UserHeader: React.FC<UserHeaderProps>  = ({ userAddress }) => {
    return (
        <UserHeaderContainer alignItems={'center'} gap={'12px'} width={'calc(100% - 32px)'}>
            <Icon size={32} src={getYaspApiStaticSrc('ethereum-32px', 'chain')} alt={'Ethereum blockchain logo'} />
            <Bold16x24>
                {shortenAddress(userAddress)}
            </Bold16x24>

            <Icon
                margin={'0 0 0 auto'}
                src={copyIcon}
                alt={'Copy Icon'}
                onClick={() => {
                    return;
                }}
            />
            <Icon
                src={settingsIcon}
                alt={'Settings Icon'}
                onClick={() => {
                    return;
                }}
            />
        </UserHeaderContainer>
    )
}


const UserHeaderContainer = styled(Row)`
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.25);
    background: ${({ theme }) => theme.palette.secondaryBackground};
    padding: 16px;
`;
