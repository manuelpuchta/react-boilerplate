import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { incrementValue, decreaseValue } from './actions';
import getRandomOneValue from './getRandomOneValue';

const Container = styled.div`
  text-align: center;
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
        <button onClick={this.upHandler}>value + 1</button> OR <button onClick={this.downHandler}>value - 1</button>
        <br />
        <br />
        <div>Current value: {value}</div>
        <div>Random value by selector: {randomValue}</div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  value: state.one.value,
  randomValue: getRandomOneValue(state),
});

export default connect(
  mapStateToProps,
  {
    incrementValue,
    decreaseValue,
  }
)(One);
