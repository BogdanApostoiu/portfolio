import styled, { css } from 'styled-components';
import COLORS from './variables';

export const H1 = styled.h1`
  font-family: 'OldStandard';
  font-size: 60px;
  line-height: 56px;
  color: inherit;
  font-weight: 500;
  margin: 0 0 15px;
`;

export const H2 = styled.h2`
  font-family: 'OldStandard';
  font-size: 32px;
  color: inherit;
  font-weight: 500;
  margin-bottom: 30px;
`;

export const H3 = styled.h3`
  font-family: 'Raleway';
  font-size: 18px;
  color: inherit;
  font-weight: 500;
`;

export const P = styled.p`
  color: inherit;
  font-family: 'Raleway';
  font-size: 18px;
  margin-bottom: 15px;
`;

export const Highlighted = styled.span`
  color: ${COLORS.orange};
  ${({ bold }) => bold
    && css`
      font-weight: 600;
    `}
`;

export default H1;
