import React from 'react';
import Poster from '../../assets/me.png';
import {
  Wrapper,
  Photo,
  Text,
  Name,
  Heading,
  SubHeading,
} from './styles';

export const Hero = () => (
  <Wrapper>
    <Photo>
      <img src={Poster} alt="me" />
    </Photo>
    <Text>
      <Heading>hi, <br /> i'm <Name>BOGDAN</Name>.</Heading>
      <SubHeading>
        <span>Web Developer</span>
        <span>▫</span>
        <span>UI/UX</span>
        <span>▫</span>
        <span>Freelancer</span>
      </SubHeading>
    </Text>
  </Wrapper>
);

export default Hero;