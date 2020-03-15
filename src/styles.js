import styled, { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

export const colors = {
  black: '#000000',
  green: {
    '25': 'rgba(0, 255, 105, 0.25)',
    '55': 'rgba(0, 255, 105, 0.55)',
    '100': 'rgba(0, 255, 105, 1)',
  },
};

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
`;

export const Button = styled.button`
  border: 0;
  padding: 0.5em 0.75em;
  border-radius: 0.35em;
  background-color: ${colors.green['55']};
  outline: none;
  cursor: pointer;
  transition: box-shadow 0.15s ease-in;

  &:active {
    background-color: ${colors.green['100']};
  }

  &:hover {
    box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.25);
  }
`;
