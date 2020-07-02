# Reducks (Redux Queue)

A `redux-observable` driven FIFO (first in - first out) queuing system for `redux` and `redux-thunk`. Fully compatible with `react-redux`.

This project's github pages and local demo were bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Logo credit: [Damian Ryan](https://github.com/damianryann)

[![npm](https://flat.badgen.net/npm/v/reducks-redux-queue)](https://www.npmjs.com/package/reducks-redux-queue) [![npm](https://flat.badgen.net/npm/license/rsup-progress)](https://github.com/penguinofwar/reducks-redux-queue/blob/master/LICENSE) ![GitHub Pages](https://github.com/PenguinOfWar/reducks-redux-queue/workflows/GitHub%20Pages/badge.svg) [![Node.js Package](https://github.com/PenguinOfWar/reducks-redux-queue/workflows/Node.js%20Package/badge.svg)](https://www.npmjs.com/package/reducks-redux-queue)

## Demos & Examples

The interactive demos for Reducks leverage `react`, `react-redux` and the wonderful libraries `rsup-progress` and `react-toastr` to demonstrate the FIFO queuing system in action.

If you are integrating Reducks into a `react-redux` application I recommend browsing the source code of the demo pages.

[Click here for demos and examples](https://penguinofwar.github.io/reducks-redux-queue/)

## Installation

The installation instructions assume you are already set up and working with `redux`. If you are not, I recommend you start with [the basics](https://redux.js.org/basics/basic-tutorial).

### Step 1

Install Reducks and required peer dependencies.

```bash
npm install reducks-redux-queue redux-observable redux-thunk redux rxjs --save
```

Configure your root reducer and root epics. The reducer name for Reducks must be `reducks`.

```js
import { combineReducers } from 'redux';
import { reducks, reducksEpic } from 'reducks-redux-queue';

export const rootEpic = combineEpics(reducksEpic);

export default combineReducers({
  ..., // your other reducers go here
  reducks
});
```

### Step 2

Include both in your store. Please see the demo source code for an example integration that includes `react-router` and `redux-dev-tools`.

After your store is configured, the epic middleware <u>must</u> be run with custom arguments to pass the store through to Reducks.

```js
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer, { rootEpic } from './rootReducer';

const epicMiddleware = createEpicMiddleware();

export default function configureStore({ initialState = {} }) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunk, epicMiddleware))
  );

  epicMiddleware.run((action$, state$) => {
    return rootEpic(action$, state$, {
      store
    });
  });

  return store;
}
```

When configuring the root epic, you can also pass custom methods that will be fired when the queue starts and when it finishes. See the demo page for an example of this that implements a progress bar.

```js
epicMiddleware.run((action$, state$) => {
  return rootEpic(action$, state$, {
    store,
    config: {
      onStart: () => {
        // code that will fire when the queue starts
      },
      onFinish: () => {
        // code that will fire when the queue finshes
      }
    }
  });
});
```

### Step 3

With our epic connected up our changes can be observed and the queue can progress. The final step is adding some stuff to our queue.

Reducks exposes an `add` action for queuing jobs. Connect this into your `dispatch`.

```js
import { add as addToQueue } from 'reducks-redux-queue';

const dispatched = dispatch => {
  return {
    addToQueue: (name, job) => dispatch(addToQueue(name, job))
  };
};
```

The `add` action accepts two properties:

- `name` - A friendly name that is logged to the console along with any errors if your job fails.
- `job` - Your `async/await` or `Promise` job method to be called. Receives the `job` object as a property. If you do not use `async/await` or `Promise` then Reducks will not be able to guarantee call order.

Note that if a job fails the result of the call will be logged to the console and the job will be removed from the queue in order to process the next one.

You can then call the `add` action to push a job into the queue.

```js
add('addToQueue', async ({ job }) => {
  const { id, name } = job;

  console.log('About to wait');
  console.log(id, name);

  await new Promise(resolve =>
    setTimeout(() => {
      console.log('Waited 5000ms');
      resolve();
    }, 5000)
  );

})};
```

You can also wrap `add` with `dispatch` manually, for example within other actions.

```js
dispatch(
  addToQueue('deleteItem', async () => {
    /* your async code here */
  })
);
```

Done. You can now enqueue jobs and Reducks will do the rest.

## API

### reducksEpic() / rootEpic()

| Property              | Type          | Description                                                  | Required |
| --------------------- | ------------- | ------------------------------------------------------------ | -------- |
| action$               | `stream`      | Observable Stream from `redux-observable`                    | Yes      |
| state$                | `stream`      | Observable Stream from `redux-observable`                    | Yes      |
| props                 | `object`      | Props object to pass store and config to Reducks             | Yes      |
| props.store           | `redux store` | Redux store to be observed for queued jobs                   | Yes      |
| props.config          | `object`      | Optional object to pass additional configuration options to Reducks | No       |
| props.config.onStart  | `func`        | Function called when a queue starts processing jobs          | No       |
| props.config.onFinish | `func`        | Function called when a queue finishes processing jobs        | No       |

```js
epicMiddleware.run((action$, state$) => {
  return rootEpic(action$, state$, {
    store,
    config: {
      onStart: () => {
        // code that will fire when the queue starts
      },
      onFinish: () => {
        // code that will fire when the queue finshes
      }
    }
  });
});
```

### add()

| Property | Type     | Description                                                  | Required |
| -------- | -------- | ------------------------------------------------------------ | -------- |
| name     | `string` | Friendly name for the queued job. Useful primarily for debugging | Yes      |
| job      | `func`   | Async function to be called as a queued job. Receives the job object with a unique ID and friendly name. | Yes      |

```js
dispatch(
  addToQueue('myJob', async ({ job = {} }) => {
    const { id, name } = job;
    
    console.log(id, name);
    
    /* your async code here */
    
    await myAsyncCall();
  })
);
```

## Support

Please create an issue in the [issue tracker](https://github.com/PenguinOfWar/reducks-redux-queue/issues) if you have a problem or need support. Please select the correct label when creating your issue (e.g. `help wanted` or `bug`).

## Contributing

Contributions are welcome. Note that code style is enforced with `prettier`. Kindly adhere to this while making contributions.

### Step 1: Fork this repo

### Step 2: Start hacking

### Step 3: [Open a PR](https://github.com/PenguinOfWar/reducks-redux-queue/pulls)

### Step 4: Profit 💰💰💰

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## License

MIT License
