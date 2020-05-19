import styled, { keyframes } from 'styled-components';
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

export default Bullet;
