import React from 'react';
import { hot } from 'react-hot-loader';
import { GlobalStyle } from 'styles';
import { Container, Headline } from './styles';
import RandomFeature from 'RandomFeature';
import RandomHooksFeature from '../RandomHooksFeature';

const Demo = () => (
  <Container>
    <GlobalStyle />
    <Headline>React boilerplate</Headline>
    <p>Hi, nice to meet you!</p>
    <RandomFeature
      anotherRandomProp={
        'Redux helps you to control and centralize your applications state in a huge scalable way.'
      }
    />
    <RandomHooksFeature
      randomProp={
        'Hooks are a great way to handle state changes within a functional component and beyond, give it a try.'
      }
    />
  </Container>
);

export default hot(module)(Demo);
