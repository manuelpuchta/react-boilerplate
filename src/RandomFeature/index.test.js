import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { RandomFeature } from './index';
import { Button } from '../styles';
import randomFeature from './reducer';
import { incrementValue, decreaseValue } from './actions';
import { ONE_UP, ONE_DOWN } from './constants';

const mockInitialState = {
  randomFeature: {
    value: 3,
  },
};
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore(mockInitialState);

describe('RandomFeature Component test.', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('Handles incrementValue action correctly', () => {
    store.dispatch(incrementValue());
    const expectedUpPayload = {
      type: ONE_UP,
      payload: { value: 4 },
    };
    expect(store.getActions()).toEqual([expectedUpPayload]);
  });

  it('Handles decreaseValue action correctly', () => {
    store.dispatch(decreaseValue());
    const expectedDownPayload = {
      type: ONE_DOWN,
      payload: { value: 2 },
    };
    expect(store.getActions()).toEqual([expectedDownPayload]);
  });

  test('Click handler executions work as expected', () => {
    const mockOnClick = jest.fn();
    const wrapper = shallow(
      <RandomFeature incrementValue={mockOnClick} decreaseValue={mockOnClick} />,
    );

    expect(wrapper.find(Button)).toHaveLength(2);

    // up button
    wrapper.find(Button).filter({ up: true }).simulate('click');
    expect(mockOnClick.mock.calls.length).toEqual(1);

    // down button
    wrapper.find(Button).filter({ down: true }).simulate('click');
    expect(mockOnClick.mock.calls.length).toEqual(2);
  });

  it('Reducer state init and updates are working', () => {
    const actionWithoutPayload = { type: ONE_UP };
    const initialState = { value: 0 };
    expect(randomFeature(undefined, actionWithoutPayload)).toEqual(initialState);

    const actionWithPayload = { type: ONE_UP, payload: { value: 5 } };
    const expectedState = { value: 5 };
    expect(randomFeature(undefined, actionWithPayload)).toEqual(expectedState);
  });
});
