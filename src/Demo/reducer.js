import { DEMO_ONE_UP } from './constants';

const initialState = {
  value: 0,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case DEMO_ONE_UP: {
      return { ...state, ...payload };
    }
  }
  return state;
};
