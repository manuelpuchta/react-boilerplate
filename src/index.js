import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './Demo';
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Demo />
  </Provider>
);

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<App />, root);

export default App;
