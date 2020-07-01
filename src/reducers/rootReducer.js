import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { reducks, reducksEpic } from '../lib';
import { combineEpics } from 'redux-observable';

export const rootEpic = combineEpics(reducksEpic);

export default combineReducers({
  routing: routerReducer,
  toastr: toastrReducer,
  reducks
});
