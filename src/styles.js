import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

export const colors = {
  black: '#000000',
  green: {
    a: '#00ff692b',
    b: '#00ff6996',
    c: '#00ff69',
  },
};

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
`;

export default GlobalStyle;
