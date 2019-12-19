import React from 'react';
import { hot } from 'react-hot-loader';
import GlobalStyle from 'styles';
import { Container, Headline } from './styles';
import RandomFeature from 'RandomFeature';

const Demo = () => (
  <Container>
    <GlobalStyle />
    <Headline>React boilerplate</Headline>
    <p>Hi, nice to meet you!</p>
    <RandomFeature />
  </Container>
);

export default hot(module)(Demo);
