import React from 'react';
import Poster from '../../assets/me.png';
import {
  Wrapper, Photo, Text, Name, Heading, SubHeading,
} from './styles';
import { SectionSeparator as Separator } from '../../styles/layouts';

export const Hero = ({ animate }) => (
  <>
    <Wrapper>
      <Photo animate={animate}>
        <img src={Poster} alt="me" />
      </Photo>
      <Text>
        <Heading animate={animate}>
          hi, <br /> I&apos;m <Name>BOGDAN</Name>
        </Heading>
        <SubHeading animate={animate}>
          <span>Web Developer</span>
          <span>▫</span>
          <span>UI/UX</span>
          <span>▫</span>
          <span>Freelancer</span>
        </SubHeading>
      </Text>
    </Wrapper>
    <Separator />
  </>
);

export default Hero;
