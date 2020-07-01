import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer, { rootEpic } from '../reducers/rootReducer';

const epicMiddleware = createEpicMiddleware();

export default function configureStore({ initialState = {}, history }) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, routerMiddleware(history), epicMiddleware),
      window.navigator.userAgent.includes('Chrome') &&
        window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : compose
    )
  );

  epicMiddleware.run((action$, state$) => {
    return rootEpic(action$, state$, {
      store,
      config: {
        onStart: () => {
          window.progress.start();
        },
        onFinish: () => {
          window.progress.end();
        }
      }
    });
  });

  return store;
}
