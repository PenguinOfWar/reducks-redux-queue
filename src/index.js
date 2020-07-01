import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import Progress from 'rsup-progress';
import ReduxToastr from 'react-redux-toastr';

import configureStore from './stores/store';

import App from './containers/App/App';

import * as serviceWorker from './serviceWorker';

import 'react-redux-toastr/src/styles/index.scss';
import './sass/index.scss';

const history = createHistory();

const initialState = {};

window.progress = new Progress({
  height: 25,
  color: 'red'
});

const store = configureStore({ initialState, history });

const AppLoader = (
  <Provider store={store}>
    <Router history={history}>
      <Route
        path="*"
        component={props => (
          <React.Fragment>
            <App {...props} />
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
          </React.Fragment>
        )}
      />
    </Router>
  </Provider>
);

ReactDOM.render(AppLoader, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
