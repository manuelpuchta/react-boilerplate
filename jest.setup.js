// import '@testing-library/jest-dom';

import 'jest-styled-components';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// enable fake timers
jest.useFakeTimers();

// configure enzyme
Enzyme.configure({ adapter: new Adapter() });
