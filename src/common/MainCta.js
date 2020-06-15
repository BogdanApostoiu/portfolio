import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const fontSize = 18;

const Button = styled.button`
  outline: none;
  appearance: none;
  background: transparent;
  font-family: 'Raleway';
  font-size: ${fontSize}px;
  font-weight: 800;
  color: inherit;
  cursor: pointer;
  text-transform: uppercase;
  padding: 10px 15px;
  height: 60px;
  width: auto;
  border: none;
  letter-spacing: 3px;
  border: 1px solid;
  border-radius: 5px;
`;

const TextAnimationKey = keyframes`{
    to {
        color: orange;
        transform: scale(1.5, 1.5);
    }
}`;

const Letter = styled.span`
  display: inline-block;
  ${({ delay, animate }) => animate
    && css`
      animation: ${TextAnimationKey} 600ms ease-in;
      animation-delay: ${200 * delay}ms;
    `}
  ${({ children }) => children === ' '
    && css`
      width: 10px;
    `}
`;

export const MainCta = ({
  label, children, onClick, animate,
}) => (
  <Button onClick={onClick}>
    {label
      && label
        .split('')
        .map((val, idx) => ({ val, idx }))
        .map(({ val, idx }) => (
          <Letter delay={idx} key={idx} animate={animate}>
            {val}
          </Letter>
        ))}

    {children}
  </Button>
);

export default MainCta;
