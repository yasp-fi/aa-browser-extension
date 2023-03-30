import React from 'react';
import {h} from 'preact';
import {Column, Row} from 'components/layout/flex';
import {Bold18x27, Medium14x21} from 'components/typography';
import BrickButton from 'components/button/brick-button';
import {useTheme} from 'styled-components';


type OverviewSectionProps = {
    children: any;
    sectionText: string;
    leftSectionActionText: string;
    leftSectionActionClick: VoidFunction;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({
                                                                    sectionText,
                                                                    leftSectionActionText,
                                                                    leftSectionActionClick,
                                                                    children
                                                                }) => {
    const theme = useTheme();

    return (
        <Column gap={'12px'}>
            <Row alignItems={'center'} justifyContent={'space-between'}>
                <Bold18x27>
                    {sectionText}
                </Bold18x27>
                <BrickButton
                    borderColor={theme.palette.yellow}
                    padding={'4px 12px'}
                    height={'29px'}
                    width={'auto'}
                    filled={false}
                >
                    <Medium14x21 fontColor={theme.palette.yellow}>
                        {leftSectionActionText}
                    </Medium14x21>
                </BrickButton>
            </Row>
            {children}
        </Column>
    );
};
