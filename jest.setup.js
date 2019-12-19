import 'jest-styled-components';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// enable fake timers
jest.useFakeTimers();

// configure enzyme
Enzyme.configure({ adapter: new Adapter() });
