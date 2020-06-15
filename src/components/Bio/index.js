import React from 'react';
import { Wrapper, Text } from './styles';
import { H2, P, Highlighted } from '../../styles/typography';
import { SectionSeparator as Separator } from '../../styles/layouts';

export const Bio = () => (
  <>
    <Wrapper>
      <H2>About Me</H2>

      <Text>
        <P>
          My name is <Highlighted bold>Bogdan Apostoiu</Highlighted> and I&apos;m a web developer.
        </P>
        <P>&sect;</P>
        <P>
          I began my journey in highschool when I picked up JavaScript as a way to feed my nerdy
          programming curiosity. Soon after I&apos;ve started with some quick freelancing work that
          lead me having my first real job during college.
        </P>
        <P>&sect;</P>
        <P>
          Since then I&apos;ve come across multiple technologies, projects, workplaces and
          industries.
        </P>
      </Text>
    </Wrapper>
    <Separator inverted />
  </>
);

export default Bio;
