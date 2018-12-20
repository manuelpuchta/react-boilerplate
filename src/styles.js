import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

export const colors = {
  white: '#ffffff',
  black: '#000000',
  yellow: '#f2cc51',
  spaceGrey: '#4b4b4c',
};

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
`;

export default GlobalStyle;
