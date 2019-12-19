import React from 'react';
import { Provider } from 'react-redux';
import App from './index';
import { mount } from 'enzyme';

describe('App test (root Component).', () => {
  it('Should mount correctly', () => {
    const mountedApp = mount(<App />);
    const isReduxProvider = mountedApp.find(Provider);
    expect(isReduxProvider).toHaveLength(1);
  });
});
