import React from 'react';
import { shallow } from 'enzyme';
import RandomHooksFeature from './index';
import { Button } from '../styles';

describe('RandomHooksFeature test (fn Component).', () => {
  let wrapper;

  const countCopyMocks = {
    0: 'You clicked 0 times',
    1: 'You clicked 1 times',
  };

  beforeEach(() => {
    wrapper = shallow(<RandomHooksFeature />);
  });

  describe('setCount state update is working as expected.', () => {
    it('{count} value equals 0 initially.', () => {
      const lastParagraph = wrapper.find('p').last();
      const compareCopyText = lastParagraph.text();
      expect(compareCopyText).toEqual(countCopyMocks[0]);
    });

    it('{count} value equals 1 after Button onClick handler execution.', () => {
      const button = wrapper.find(Button);
      button.props().onClick();

      const lastParagraph = wrapper.find('p').last();
      const compareCopyText = lastParagraph.text();
      expect(compareCopyText).toEqual(countCopyMocks[1]);
    });
  });
});
