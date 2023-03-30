import styled from 'styled-components';
import React from "react";
import { AnimatePresence, motion } from 'framer-motion'
import {useLocation} from "react-router";


export const ScreenLayoutWrapper = styled.main<{ bgColor?: string; }>`
  width: 350px;
  height: 750px;
  overflow-y: auto;
  position: relative;
  box-sizing: border-box;
  background-color: ${({ bgColor, theme }) => bgColor || theme.palette.background };
`;



type ScreenLayoutProps = {
    children: React.ReactNode;

    bgColor?: string;
}

export const ScreenLayout: React.FC<ScreenLayoutProps> = ({ children, bgColor }) => {
    const location = useLocation();

    return (
        <ScreenLayoutWrapper bgColor={bgColor}>
            <AnimatePresence mode={'wait'}>
                <motion.div
                    key={location.key}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ type: 'tween', ease: 'anticipate', duration: 0.5 }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </ScreenLayoutWrapper>
    );
}
