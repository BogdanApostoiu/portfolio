import styled from "styled-components";
import { COLORS } from "../../styles/variables";
import {
  SwirlAnimation,
  FadeInSlideDownAnimation,
  TextShadowAnimation,
  RollOutTextAnimation,
} from "../../styles/animations";
import { H1, H3 } from "../../styles/typography";

export const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

export const Photo = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 100%;
  align-self: center;
  margin-right: 15px;
  ${SwirlAnimation};
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: top;
  }
`;

export const Text = styled.div`
  padding: 0 20px;
`;

export const Heading = styled(H1)`
  ${FadeInSlideDownAnimation}
`;

export const SubHeading = styled(H3)`
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding: 4px;
  margin: 0;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  :after {
    content: "";
    height: 31px;
    overflow: hidden;
    width: 100%;
    position: absolute;
    top: -1px;
    right: 0;
    background: ${COLORS.grey};
    ${RollOutTextAnimation};
  }
`;

export const Name = styled.span`
  color: ${COLORS.orange};
  font-family: "Raleway";
  line-height: 0px;
  font-weight: bold;
  font-size: 80px;
  display: inline-block;
  ${TextShadowAnimation};
`;

export default Wrapper;
