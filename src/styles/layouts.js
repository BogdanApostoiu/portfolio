import styled, { css, keyframes } from 'styled-components';
import { COLORS } from './variables';

const FadeBackground = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const FullContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
  padding-bottom: 100px;
  ${(props) => props.background
    && css`
      background: ${props.background === 'dark' ? COLORS.grey : COLORS.white};
      color: ${props.background === 'dark' ? COLORS.white : COLORS.grey};
    `};
  ${(props) => props.highlighted
    && css`
      position: relative;
      :after {
        content: '';
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: conic-gradient(from -90deg at 100% 0%, #fff, #101820ff);
        animation: ${FadeBackground} 3s forwards ease-in;
      }
    `}
`;

export const Container = styled(FullContainer)`
  height: auto;
`;

export const CenteredSection = styled.section`
  width: 100%;
  height: 100%;
  padding: 25px;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
`;

export const SectionSeparator = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  left: 0;
  bottom: -1px;
  background: linear-gradient(to right bottom, ${COLORS.grey} 49%, ${COLORS.white} 50%);
  ${(props) => props.inverted
    && css`
      background: linear-gradient(to left bottom, ${COLORS.white} 49%, ${COLORS.grey} 50%);
    `}
`;

export default FullContainer;
