import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../styles';

const RandomHooksFeature = ({ randomProp }) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>
        <a href="https://reactjs.org/docs/hooks-intro.html" title={'React hooks docs'}>
          React Hooks
        </a>{' '}
        example
      </h2>
      <p>{randomProp}</p>
      <p>You clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
    </>
  );
};

RandomHooksFeature.propTypes = {
  randomProp: PropTypes.string.isRequired,
};

RandomHooksFeature.defaultProps = {
  randomProp: 'Cool, cool, cool.',
};

export default RandomHooksFeature;
