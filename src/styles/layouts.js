import styled, { css, keyframes } from 'styled-components';
import { COLORS } from '../styles/variables';

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
  ${
  (props) => (
    props.background && css`
      background: ${props.background === 'dark' ? COLORS.grey : COLORS.white};
      color: ${props.background === 'dark' ? COLORS.white : COLORS.grey};
    `)
  };
  ${
  props => (
    props.highlighted && css`
        position: relative;
        :after {
          content: '';
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background: conic-gradient(from -90deg at 100% 0%, #fff, #101820FF);
          animation: ${FadeBackground} 3s forwards ease-in;
        }
    `)
  }
`;

export default FullContainer;