import { createGlobalStyle } from 'styled-components';
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
