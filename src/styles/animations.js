import { keyframes, css } from 'styled-components';

const Swirl = keyframes`
  0% {
    transform: rotate(45deg);
  }

  80% {
    transform: rotate(-10deg);
  }

  90% {
    transform: rotate(10deg);
  }

  100% {
    transform: rotate(0);
  }
`;

export const SwirlAnimation = css`
  animation: ${Swirl} 700ms ease-in-out;
`;

const FadeInSlideDown = keyframes`
  0% {
    transform: translateY(-200px);
    opacity: 0;
  }

  80% {
    opacity: .4;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const FadeInSlideDownAnimation = css`
  animation: ${FadeInSlideDown} 500ms forwards cubic-bezier(0, 0, 1, 1.3);
`;

const TextShadow = keyframes`
  0% {
    text-shadow: none;
    transform: none;
  }
  
  50% {
    text-shadow: 1px 8px 2px rgba(226, 216, 82, 0.2);
    transform: translate(-1px, -8px);
  }
  
  100% {
    text-shadow: none;
    transform: none;
  }
`;

export const TextShadowAnimation = css`
  animation: ${TextShadow} 3000ms infinite ease-in-out;
`;

const RollOutText = keyframes`
  from {
    width: 100%;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  to {
    width: 0;
  }
`;

export const RollOutTextAnimation = css`
  animation: ${RollOutText} 2000ms forwards ease-in-out;
  animation-delay: 1s;
`;

export default Swirl;