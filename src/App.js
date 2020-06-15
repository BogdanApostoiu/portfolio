import React, { useState } from 'react';

import { Container, FullContainer } from './styles/layouts';
import { LoadingScreen } from './styles/components';

import Hero from './components/Hero';
import Bio from './components/Bio';
import Skills from './components/Skills';
import Contact from './components/Contact';

const cs = (bool) => (bool
  ? {
    overflow: 'hidden',
    height: '100%',
    width: '100%',
    position: 'absolute',
  }
  : {});

export const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div style={cs(loading)}>
      {loading && <LoadingScreen end={() => setLoading(false)} />}
      <FullContainer background="dark">
        <Hero animate={!loading} />
      </FullContainer>

      <Container background="light">
        <Bio />
      </Container>

      <Container background="dark">
        <Skills />
      </Container>

      <Container background="light">
        <Contact />
      </Container>
    </div>
  );
};

export default App;
