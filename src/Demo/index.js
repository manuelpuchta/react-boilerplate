import React from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GlobalStyle, { colors } from 'styles';
import { oneUp } from './actions';

const Container = styled.div`
  font-family: monospace;
  margin: 60px auto;
  color: ${colors.black};
`;

const Headline = styled.h1`
  text-align: center;
`;

class Demo extends React.Component {
  static propTypes = {
    value: PropTypes.number,
    oneUp: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.upHandler = this.upHandler.bind(this);
  }

  upHandler() {
    this.props.oneUp();
  }

  render() {
    const { value } = this.props;

    return (
      <Container>
        <GlobalStyle />
        <Headline>React boilerplate </Headline>
        <button onClick={() => this.upHandler()}>Update value</button>
        <div>Value: {value}</div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  value: state.demo.value,
});

export default hot(module)(
  connect(
    mapStateToProps,
    {
      oneUp,
    }
  )(Demo)
);
