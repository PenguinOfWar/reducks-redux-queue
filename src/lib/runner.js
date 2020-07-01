import { remove, start, stop } from './actions';

let running = 0;

export const runner = async (store = {}) => {
  const { dispatch } = store;

  if (running) {
    return;
  }

  const state = store.getState();
  const { reducks = {} } = state;
  const { jobs = [], running: isRunning } = reducks;

  if (jobs.length > 0) {
    !isRunning && dispatch(start());

    running = running + 1;

    const job = jobs[0] || {};
    const { name, call = () => {} } = job;

    try {
      await call({ store, job });
    } catch (err) {
      console.warn(`Task ${name} has failed`);
      console.warn(err);
    }

    next(store, job);

    return;
  }

  dispatch(stop());

  return;
};

export const next = (store, job) => {
  const { dispatch } = store;

  dispatch(remove(job));

  running = running - 1 || 0;

  runner(store);
};
