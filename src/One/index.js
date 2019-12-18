import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from 'styles';
import { incrementValue, decreaseValue } from './actions';
import getRandomOneValue from './getRandomOneValue';

const Container = styled.div`
  padding: 2em 0;
  text-align: center;
`;

const Button = styled.button`
  border: 0;
  padding: 0.5em 0.75em;
  border-radius: 0.35em;
  background-color: ${colors.green.b};
  outline: none;
  cursor: pointer;
  transition: box-shadow 0.15s ease-in;

  &:active {
    background-color: ${colors.green.c};
  }

  &:hover {
    box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.25);
  }
`;

class One extends React.Component {
  static propTypes = {
    decreaseValue: PropTypes.func,
    randomValue: PropTypes.number.isRequired,
    incrementValue: PropTypes.func,
    value: PropTypes.number.isRequired,
  };

  upHandler = () => {
    this.props.incrementValue();
  };

  downHandler = () => {
    this.props.decreaseValue();
  };

  render() {
    const { value, randomValue } = this.props;

    return (
      <Container>
        <Button onClick={this.upHandler}>value + 1</Button> OR <Button onClick={this.downHandler}>value - 1</Button>
        <p>Current value: {value}</p>
        <i>
          Random value from <code>getRandomOneValue</code> selector: {randomValue}
        </i>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  value: state.one.value,
  randomValue: getRandomOneValue(state),
});

export default connect(mapStateToProps, {
  incrementValue,
  decreaseValue,
})(One);
