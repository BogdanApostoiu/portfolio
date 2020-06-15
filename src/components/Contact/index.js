import React from 'react';
import { Wrapper } from './styles';
import { H2, P } from '../../styles/typography';
import { MainCta as CTA } from '../../common/MainCta';

export const mailTo = () => {
  window.location.href = 'mailto:bogdan.apostoiu@gmail.com';
};

const Contact = () => (
  <>
    <Wrapper>
      <H2>Contact me</H2>

      <P>Interested in a remote collaboration ?</P>

      <CTA label={"Let's get in touch"} onClick={mailTo} />
    </Wrapper>
  </>
);

export default Contact;
