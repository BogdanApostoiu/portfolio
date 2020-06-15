import styled from 'styled-components';
import { H3 } from '../../styles/typography';
import COLORS from '../../styles/variables';

export const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
`;

export const Row = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(241, 241, 241, 0.3);
  padding: 15px 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Heading = styled(H3)`
  flex: 1;
  text-transform: uppercase;
`;

export const Separator = styled.div`
  min-height: 52px;
  height: 100%;
  width: 10px;
  background: ${COLORS.orange};
//   background: linear-gradient(to bottom, ${COLORS.grey}, ${COLORS.orange}, ${COLORS.white});
`;

export const RowContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  flex: 1;
  padding: 0 15px;
`;

export const Icon = styled.img`
  width: 100px;
  height: 100px;
  padding: 10px;
  transition: all 600ms ease-in-out;

  @media (max-width: 500px) {
    width: 60px;
    height: 60px;
  }
`;

export const IconTooltip = styled.span`
  font-family: 'Raleway';
  display: none;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  line-height: 100px;
  text-align: center;
  background: rgba(15, 24, 32, 0.4);
  z-index: 2;
`;

export const IconWrapper = styled.div`
  position: relative;
  cursor: pointer;

  &:hover {
    ${IconTooltip} {
      display: block;
    }
    ${Icon} {
      transform: rotateY(180deg);
    }
  }
`;

export default Wrapper;
