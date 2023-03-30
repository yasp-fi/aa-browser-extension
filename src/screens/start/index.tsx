import React from 'react';
import { ScreenLayout } from 'components/layout/screen-layout';
import styled from 'styled-components';
import { Column, Row } from 'components/layout/flex';

import BrickButton from 'components/button/brick-button';
import RoundButton from 'components/button/round-button';
import { Bold18x27, Medium14x21 } from 'components/typography';

import yaspLogo from 'assets/icons/yasp-logo.svg';

import googleLogo from 'assets/third-parties/google.svg';
import discordLogo from 'assets/third-parties/discord.svg';
import twitterLogo from 'assets/third-parties/twitter.svg';
import facebookLogo from 'assets/third-parties/facebook.svg';
import { LoginProviders, useWeb3Auth } from '../../hooks/use-web3-auth';

export const StartScreen: React.FC = () => {
  const { provider, login } = useWeb3Auth();

  return (
    <StartScreenLayout>
      <Column gap={'16px'} padding={'20px'} alignItems={'center'} justifyContent={'center'}>
        <img src={yaspLogo} width={60.29} height={47.85} alt={'Yasp Logo Image'} />

        <WelcomeText>Welcome</WelcomeText>

        <BrickButton
          margin={'12px 0 0 0'}
          width={'100%'}
          height={'109px'}
          alignItems={'flex-start'}
          justifyContent={'flex-start'}
          flexDirection={'column'}
          filled
        >
          <Bold18x27>Create new wallet</Bold18x27>
          <Medium14x21 textAlign={'left'}>
            12/24 words separated <br />
            by spaces.
          </Medium14x21>
        </BrickButton>

        <OrText textAlign={'center'}>Or sign in with</OrText>
        <ErrorText textAlign={'center'}>{provider ? 'Signed' : '??'}</ErrorText>

        <Row gap={'24px'} alignItems={'center'} justifyContent={'center'}>
          <RoundButton onClick={() => login()}>
            <img width={36} height={36} src={googleLogo} alt={'Google Logo'} />
          </RoundButton>
          {/* 
          <RoundButton onClick={() => login(LoginProviders.Discord)}>
            <img width={32} height={32} src={discordLogo} alt={'Discord Logo'} />
          </RoundButton>

          <RoundButton onClick={() => login(LoginProviders.Twitter)}>
            <img width={32} height={26.32} src={twitterLogo} alt={'Twitter Logo'} />
          </RoundButton>

          <RoundButton onClick={() => login(LoginProviders.Facebook)}>
            <img width={36} height={36} src={facebookLogo} alt={'Facebook Logo'} />
          </RoundButton> */}
        </Row>
      </Column>
    </StartScreenLayout>
  );
};

const StartScreenLayout = styled(ScreenLayout)`
  background-color: ${({ theme }) => theme.palette.background};
`;

const WelcomeText = styled.span`
  font-size: 32px;
  line-height: 48px;
  font-style: normal;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.white};
`;

const OrText = styled(Medium14x21)`
  color: ${({ theme }) => theme.palette.gray};
  text-transform: uppercase;
`;

const ErrorText = styled(Medium14x21)`
  color: red;
`;
