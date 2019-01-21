import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { incrementValue, decreaseValue } from './actions';

const Container = styled.div`
  text-align: center;
`;

class One extends React.Component {
  static propTypes = {
    value: PropTypes.number,
    incrementValue: PropTypes.func,
    decreaseValue: PropTypes.func,
  };

  upHandler = () => {
    this.props.incrementValue();
  };

  downHandler = () => {
    this.props.decreaseValue();
  };

  render() {
    const { value } = this.props;

    return (
      <Container>
        <button onClick={this.upHandler}>value + 1</button> OR <button onClick={this.downHandler}>value - 1</button>
        <br />
        <br />
        <div>Current value: {value}</div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  value: state.one.value,
});

export default connect(
  mapStateToProps,
  {
    incrementValue,
    decreaseValue,
  }
)(One);
