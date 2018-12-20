import { ONE_UP, ONE_DOWN } from './constants';

export function incrementValue() {
  return (dispatch, getState) => {
    const { value } = getState().one;
    const payload = value + 1;

    dispatch({
      type: ONE_UP,
      payload: { value: payload },
    });
  };
}

export function decreaseValue() {
  return (dispatch, getState) => {
    const { value } = getState().one;
    const payload = value - 1;

    dispatch({
      type: ONE_DOWN,
      payload: { value: payload },
    });
  };
}
