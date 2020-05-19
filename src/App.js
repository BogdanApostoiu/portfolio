import React from 'react';

import { Container, FullContainer } from './styles/layouts';

import Hero from './components/Hero';
import Bio from './components/Bio';
import Skills from './components/Skills';

export const App = () => (
  <>
    <FullContainer background="dark">
      <Hero />
    </FullContainer>

    <Container background="light">
      <Bio />
    </Container>

    <Container background="dark">
      <Skills />
    </Container>
  </>
);

export default App;
