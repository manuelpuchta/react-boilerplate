import { createSelector } from 'reselect';

const randomFeatureState = (state) => state.randomFeature;

const getRandomValue = (randomFeatureState) => {
  return Math.round(randomFeatureState.value * Math.random() * 100);
};

export default createSelector([randomFeatureState], getRandomValue);
