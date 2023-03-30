import React from 'react';
import styled from 'styled-components';
import {Row} from 'components/layout/flex';
import {Icon} from '../icon';


import searchIconSvg from 'assets/icons/search.svg';
import {Search} from 'components/search/search-input';


export const SearchBar = () => {
    return (
        <SearchBarLayout alignItems={'center'}>
            <Icon src={searchIconSvg} alt={'Search icon'}/>

            <Search handleSearch={() => {
            }} placeholder={'Search'}/>
        </SearchBarLayout>
    );
};

const SearchBarLayout = styled(Row)`
  background-color: ${({theme}) => theme.palette.secondaryBackground};
  height: 46px;
  border-radius: 10px;
`;
