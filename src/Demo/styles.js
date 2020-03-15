import styled from 'styled-components';
import { colors } from 'styles';

export const Container = styled.div`
  font-family: sans-serif;
  margin: 3em 2em 5em;
  padding: 1.5em 1.5em 3em;
  text-align: center;
  color: ${colors.black};
  background: ${colors.green['25']};
`;

export const Headline = styled.h1`
  text-align: center;
`;
