import { DEMO_ONE_UP } from './constants';

export function oneUp() {
  return (dispatch, getState) => {
    const { value } = getState().demo;
    const payload = value + 1;

    dispatch({
      type: DEMO_ONE_UP,
      payload: { value: payload },
    });
  };
}
