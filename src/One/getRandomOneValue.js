import { createSelector } from 'reselect';

const getOne = state => state.one;

const getRandomOneValue = getOne => {
  return Math.round(getOne.value * Math.random() * 100);
};

export default createSelector(
  [getOne],
  getRandomOneValue
);
