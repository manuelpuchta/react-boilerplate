import React from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import GlobalStyle, { colors } from 'styles';
import One from 'One';

const Container = styled.div`
  font-family: monospace;
  margin: 60px 32px;
  padding: 25px;
  text-align: center;
  color: ${colors.black};
  background: azure;
`;

const Headline = styled.h1`
  text-align: center;
  color: red;
`;

const Demo = () => (
  <Container>
    <GlobalStyle />
    <Headline>React boilerplate</Headline>
    <One />
  </Container>
);

export default hot(module)(Demo);
