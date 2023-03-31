import React from "react";
import styled from "styled-components";
import {Row} from "components/layout/flex";
import {Medium14x21} from "components/typography";



type ComingSoonBadgeProps = {
    marginTop?: string
}

export const ComingSoonBadge: React.FC<ComingSoonBadgeProps> = ({ marginTop }) => {
    return (
        <ComingSoonBadgeContainer marginTop={marginTop} height={'29px'} alignItems={'center'} justifyContent={'center'}>
            <Medium14x21>
                Coming soon
            </Medium14x21>
        </ComingSoonBadgeContainer>
    )
};

const ComingSoonBadgeContainer = styled(Row)<ComingSoonBadgeProps>`
  background: #EF9011;
  border-radius: 12px;
  padding: 4px 12px;
  margin-top: ${({ marginTop }) => marginTop ? marginTop : '0'};
`;
