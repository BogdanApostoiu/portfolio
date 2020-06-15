import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { COLORS } from './variables';

const BackgroundKey = keyframes`
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const Bullet = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background: transparent;
  margin: 20px auto;
  background: conic-gradient(${COLORS.grey}, ${COLORS.orange}, ${COLORS.grey});
  animation: ${BackgroundKey} 1500ms infinite;
`;

const RotateFadeOut = keyframes`
    0 {
        transform: rotate(0);
    }

    50% {
        background: ${COLORS.orange};
    }

    75% {
        border-radius: 50%;
    }

    100% {
        transform: rotate(360deg);
        background: ${COLORS.grey};
        border-radius: 50%;
    }
`;

export const Loader = styled.div`
  position: fixed;
  z-index: 999;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${COLORS.grey};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Square = styled.span`
  width: 50px;
  height: 50px;
  background: ${COLORS.white};
  margin: 0 20px;
  animation: ${RotateFadeOut} 1000ms forwards ease-in-out;
  ${({ index }) => css`
    animation-delay: ${index * 0.5}s;
  `}
`;

export const LoadingScreen = ({ end }) => (
  <Loader>
    <Square index={1} />
    <Square index={2} />
    <Square index={3} />
    <Square index={4} onAnimationEnd={end} />
  </Loader>
);

export default Bullet;
