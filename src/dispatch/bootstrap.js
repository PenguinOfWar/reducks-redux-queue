import { add } from '../lib';

const dispatched = dispatch => {
  return {
    add: (name, job) => dispatch(add(name, job))
  };
};

export const mapStateToProps = (state = {}) => {
  return state;
};

export const mapDispatchToProps = dispatch => dispatched(dispatch);
