import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

import InitialState from 'reducers';
import CountupContainer from 'containers/countup_container';

describe('<CountupContainer>', () => {
  const middleWares = [thunk];
  const mockStore = configureMockStore(middleWares);
  let action = () => ({}), wrapper, store;

  beforeEach(() => {
    store = mockStore(InitialState(undefined, action()));
    store.dispatch(action());
    wrapper = shallow(
      <CountupContainer store={store}/>
    );
  });
  describe('with default settings', () => {
    it('should render <CountupBlock>', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('dispatch an action', () => {
    action = () => ({ type: 'COUNT_UP_NUMBER' });
    it('should get dispatched action', () => {
      const getAction = store.getActions();
      expect(getAction).toEqual([{ type: 'COUNT_UP_NUMBER' }]);
    });
  });
});
