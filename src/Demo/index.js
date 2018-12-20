import React from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import GlobalStyle, { colors } from 'styles';
import One from 'One';

const Container = styled.div`
  font-family: monospace;
  margin: 60px auto;
  text-align: center;
  color: ${colors.black};
`;

const Headline = styled.h1`
  text-align: center;
`;

const Demo = () => (
  <Container>
    <GlobalStyle />
    <Headline>React boilerplate</Headline>
    <One />
  </Container>
);

export default hot(module)(Demo);
