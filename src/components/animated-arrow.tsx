import React from 'react';
import styled from 'styled-components';

import arrowDownSvg from 'assets/icons/arrow-down.svg';
import {Icon} from 'components/icon';

export type AnimatedArrowIconProps = {
    isActive: boolean;
    onClick?: VoidFunction;
};

export const AnimatedArrowIcon: React.FC<AnimatedArrowIconProps> = ({
                                                                        isActive,
                                                                        onClick,
                                                                    }) => {
    return (
        <AnimatedArrowIconContainer
            src={arrowDownSvg}
            isTransformActive={isActive}
            size={18}
            onClick={() => (onClick ? onClick() : undefined)}
            alt={`animated arrow down`}
        />
    );
};

type ContainerProps = {
    isTransformActive: boolean;
};

const AnimatedArrowIconContainer = styled(Icon)<ContainerProps>`
  cursor: pointer;
  transition: 0.15s ease;
  transform: ${(props) =>
          props.isTransformActive ? `rotateX(180deg);` : undefined};

  filter: brightness(${(props) => (!props.isTransformActive ? `0.5` : `1`)});
`;
