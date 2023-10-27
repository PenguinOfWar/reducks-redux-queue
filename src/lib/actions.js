import { ENQUEUE, DEQUEUE, COMMENCED, CEASED } from './constants';
import { guid } from './helpers';

export const add =
  (name = '', job = () => {}) =>
  async dispatch => {
    dispatch({
      type: ENQUEUE,
      payload: {
        id: guid(),
        name,
        call: job
      }
    });
  };

export const remove =
  (job = {}) =>
  async dispatch => {
    dispatch({
      type: DEQUEUE,
      payload: job
    });
  };

export const start = () => async dispatch => {
  dispatch({
    type: COMMENCED,
    payload: true
  });
};

export const stop = () => async dispatch => {
  dispatch({
    type: CEASED,
    payload: false
  });
};
