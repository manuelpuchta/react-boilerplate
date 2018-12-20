import React from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import GlobalStyle from 'styles';

const Container = styled.div`
  font-family: monospace;
  margin: 60px auto;
`;

const Headline = styled.h1`
  text-align: center;
`;

const HotLoadedDemo = () => (
  <Container>
    <GlobalStyle />
    <Headline>who am I</Headline>
  </Container>
);

export default hot(module)(HotLoadedDemo);
