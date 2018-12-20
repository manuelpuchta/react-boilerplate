import React from 'react';
import ReactDOM from 'react-dom';
import Demo from 'Demo';
import { Provider } from 'react-redux';
import store from './store';

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(
  <Provider store={store}>
    <Demo />
  </Provider>,
  root
);
