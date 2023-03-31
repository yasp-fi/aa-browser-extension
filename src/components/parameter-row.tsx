import React from "react";
import styled, {useTheme} from "styled-components";
import {Row} from "components/layout/flex";
import {Medium14x21} from "components/typography";
import {Icon} from "components/icon";


type ParameterRowProps = {
    name: string;
    value: string;
    leftValueIcon?: string;
}

export const ParameterRow: React.FC<ParameterRowProps> = ({ name, value, leftValueIcon }) => {
    const theme = useTheme();

    return (
        <ParameterLayout alignItems={'center'} justifyContent={'space-between'}>
            <Medium14x21 fontColor={theme.palette.gray}>
                {name}
            </Medium14x21>

            {
                leftValueIcon ? (
                    <Row alignItems={'center'} gap={'8px'}>
                        <Icon size={24} src={leftValueIcon} alt={`${leftValueIcon}`} />
                        <Medium14x21>
                            {value}
                        </Medium14x21>
                    </Row>
                ) : (
                    <Medium14x21>
                        {value}
                    </Medium14x21>
                )
            }
        </ParameterLayout>
    )
}

const ParameterLayout = styled(Row)`
    height: 50px;
`;
