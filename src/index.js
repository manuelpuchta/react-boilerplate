import React from 'react';
import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {
  render() {
    const style = {
      fontFamily: 'sans-serif',
      fontSize: '5vw',
      textAlign: 'center'
    };

    return <h1 style={style}>Hello {this.props.name}</h1>;
  }
}

ReactDOM.render(
  <HelloMessage name="World" />,
  document.getElementById('root')
);
