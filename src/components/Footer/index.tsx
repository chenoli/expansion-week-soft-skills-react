import React from 'react';

import { Container, MadeWith, Heart, By, Period } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <MadeWith>Feito com</MadeWith>
      <Heart>❤</Heart>
      <By>por</By>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/CHenOli"
      >
        Carlos Henrique
      </a>
      <Period>.</Period>
    </Container>
  );
};

export default Footer;
