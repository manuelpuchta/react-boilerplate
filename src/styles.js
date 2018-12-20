import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

export const colors = {
  white: '#ffffff',
  black: '#000000',
};

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
`;

export default GlobalStyle;
