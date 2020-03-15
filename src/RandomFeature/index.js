import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Button } from './styles';
import { incrementValue, decreaseValue } from './actions';
import getRandomValue from './getRandomValue';

export class RandomFeature extends Component {
  static propTypes = {
    decreaseValue: PropTypes.func,
    randomValue: PropTypes.number.isRequired,
    incrementValue: PropTypes.func,
    value: PropTypes.number.isRequired,
  };

  static defaultProps = {
    randomValue: 13,
    value: 1,
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
        <h2>
          <a href="https://redux.js.org/" title={'Redux website'}>
            Redux
          </a>{' '}
          state example
        </h2>
        <Button onClick={this.upHandler} up>
          value + 1
        </Button>{' '}
        OR{' '}
        <Button onClick={this.downHandler} down>
          value - 1
        </Button>
        <p>Current value: {value}</p>
        <i>
          Random value from <code>getRandomValue</code> selector: {randomValue}
        </i>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  value: state.randomFeature.value,
  randomValue: getRandomValue(state),
});

export default connect(mapStateToProps, {
  incrementValue,
  decreaseValue,
})(RandomFeature);
