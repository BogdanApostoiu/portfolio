import React, { useEffect, useState } from 'react';
import { Wrapper } from './styles';
import { H2, P } from '../../styles/typography';
import { MainCta as CTA } from '../../common/MainCta';

const mailTo = () => {
  window.location.href = 'mailto:bogdan.apostoiu@gmail.com';
};

const Contact = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handler = () => {
      const offset = window.innerHeight + window.scrollY >= document.body.offsetHeight;

      if (offset) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener(handler);
  }, [setAnimate]);

  return (
    <>
      <Wrapper>
        <H2>Contact me</H2>

        <P centered>Interested in a remote collaboration ?</P>

        <CTA label={"Let's get in touch"} onClick={mailTo} animate={animate} />
      </Wrapper>
    </>
  );
};

export default Contact;
