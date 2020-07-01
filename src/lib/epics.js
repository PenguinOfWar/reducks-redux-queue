import { filter } from 'rxjs/operators';

import { runner } from './runner';
import { ENQUEUE, DEQUEUE, COMMENCED, CEASED } from './constants';

export const reducksEpic = (
  action$ = {},
  state$ = {},
  { store, config = {} }
) => {
  const { onStart, onFinish } = config;

  return action$.pipe(
    filter((action = {}) => {
      const { type } = action;

      if (type === ENQUEUE || type === DEQUEUE) {
        runner(store, type);
      }

      if (type === COMMENCED) {
        typeof onStart === 'function' && onStart();
      }

      if (type === CEASED) {
        typeof onFinish === 'function' && onFinish();
      }
    })
  );
};
