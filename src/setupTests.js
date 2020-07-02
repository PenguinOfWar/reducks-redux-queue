import 'jest-enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.console.log = jest.fn();
global.console.info = jest.fn();
global.console.warn = jest.fn();
global.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {}
    };
  };

configure({ adapter: new Adapter() });
