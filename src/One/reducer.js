import { ONE_UP, ONE_DOWN } from './constants';

const initialState = {
  value: 0,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ONE_UP:
    case ONE_DOWN: {
      return { ...state, ...payload };
    }
  }
  return state;
};
