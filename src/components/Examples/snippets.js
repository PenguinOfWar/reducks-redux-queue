export const simple = `import React from 'react';
import { toastr } from 'react-redux-toastr';
                
const Simple = (props = {}) => {
  const { add } = props;

  return <button 
          onClick={() =>
            add('addToQueue', async ({ job }) => {
              const { id, name } = job;

              console.log('About to wait');
              console.log(id, name);
              await new Promise(resolve =>
                setTimeout(() => {
                  console.log('Waited 5000ms');
                  toastr.success('Success', 'Well done for waiting.');
                  resolve();
                }, 5000)
              );
            })}
          type="button">
            Enqueue
          </button>
};

export default Simple;`;

export const fifo = `import React from 'react';
import { toastr } from 'react-redux-toastr';
                
const Fifo = (props = {}) => {
  const { add } = props;

  return <button 
          onClick={() => {
            const array = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];

            array.map(item => {
              return add('pushJob', async () => {
                await new Promise(resolve =>
                  setTimeout(() => {
                    toastr.success(\`Job The \${item}\`, 'Hi there!');
                    resolve();
                  }, 1000)
                );
              });
            });
          }}
          type="button">
            Enqueue
          </button>
};

export default Fifo;`;

export const advanced = `import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer, { rootEpic } from '../reducers/rootReducer';

const epicMiddleware = createEpicMiddleware();

export default function configureStore({ initialState = {} }) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, epicMiddleware),
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
          progress.start();
        },
        onFinish: () => {
          progress.end();
        }
      }
    });
  });

  return store;
}`;
