import styled from 'styled-components';
import { colors } from 'styles';

export const Container = styled.div`
  padding: 2em 0;
  text-align: center;
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
