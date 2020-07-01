import { ENQUEUE, DEQUEUE, COMMENCED, CEASED } from './constants';
import { createReducer } from './helpers';

const initialState = {
  jobs: [],
  running: false
};

export default createReducer(initialState, {
  [ENQUEUE]: (state = {}, payload = {}) => {
    const { jobs = [] } = state;

    return {
      ...state,
      jobs: [...jobs, payload]
    };
  },
  [DEQUEUE]: (state = {}, payload = {}) => {
    const { jobs = [] } = state;

    if (jobs.length === 0) {
      return state;
    }

    const job = jobs[0] || {};
    const { id } = job;

    if (id !== payload.id) {
      return state;
    }

    jobs.shift();

    return {
      ...state,
      jobs
    };
  },
  [COMMENCED]: (state = {}) => {
    return {
      ...state,
      running: true
    };
  },
  [CEASED]: (state = {}) => {
    return {
      ...state,
      running: false
    };
  }
});
