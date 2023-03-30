import React from 'react';
import {h} from 'preact';
import styled from 'styled-components';

import {InnerPageTitle} from 'components/layout/inner-page-title';
import {ScreenLayout} from 'components/layout/screen-layout';

export const SendScreen: React.FC = () => {
    return (
        <SendScreenLayout>
            <InnerPageTitle title={'Send'}/>
        </SendScreenLayout>
    );
};


const SendScreenLayout = styled(ScreenLayout)`
  background-color: ${({theme}) => theme.palette.background};
`;
