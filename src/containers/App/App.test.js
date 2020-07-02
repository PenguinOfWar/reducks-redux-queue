import React from 'react';
import { mount } from 'enzyme';
import Progress from 'rsup-progress';
import ReduxToastr from 'react-redux-toastr';
import { Provider } from 'react-redux';
import { createBrowserHistory as createHistory } from 'history';

import configureStore from '../../stores/store';

import App from './App';

const history = createHistory();

const initialState = {};

window.progress = new Progress({
  height: 25,
  color: 'red'
});

const store = configureStore({ initialState, history });

it('mounts without crashing', () => {
  const component = mount(
    <Provider store={store}>
      <App />
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="bottom-right"
        getState={() => {
          return store.getState().toastr;
        }} // This is the default
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      />
    </Provider>
  );

  expect(component).toMatchSnapshot();
});
