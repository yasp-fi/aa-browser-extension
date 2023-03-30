import React from 'react';
import {h} from 'preact';
import styled from 'styled-components';
import arrowLeftSvg from 'assets/icons/arrow-left.svg';
import {Row} from 'components/layout/flex';
import {Bold18x27} from '../typography';
import {Icon} from '../icon';

type InnerPageTitleProps = {
    title: string;
    rightComponent?: ReturnType<typeof h>;
    onBackClick?: VoidFunction;
};

const StyledRow = styled(Row)`
  justify-content: space-between;
  width: 100%;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  text-align: center;
`;

const Spacer = styled.div`
  width: 24px; // Change this to match the width of the back icon
`;

export const InnerPageTitle: React.FC<InnerPageTitleProps> = ({
                                                                  title,
                                                                  rightComponent,
                                                                  onBackClick
                                                              }) => {
    return (
        <StyledRow alignItems={'center'}>
            <Icon onClick={onBackClick} src={arrowLeftSvg} alt={'arrow left svg'}/>
            <TitleWrapper>
                <Bold18x27>{title}</Bold18x27>
            </TitleWrapper>
            {rightComponent ? (
                <div>{rightComponent}</div>
            ) : (
                <Spacer/>
            )}
        </StyledRow>
    );
};
